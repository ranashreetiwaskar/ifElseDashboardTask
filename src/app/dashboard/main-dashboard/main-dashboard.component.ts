import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-main-dashboard',
  standalone: false,
  templateUrl: './main-dashboard.component.html',
  styleUrl: './main-dashboard.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class MainDashboardComponent implements OnInit {
  gridColumns: any[] = [];
  gridData: any[] = [];
  selectedRows: Set<string> = new Set();
  loading = true;

  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.getUsers();
    // console.log(this.selectedRows);
  }

  get allSelected(): boolean {
    return (
      this.gridData.length > 0 &&
      this.gridData.every((row) => this.selectedRows.has(row.id))
    );
  }

  toggleSelectAll(event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.gridData.forEach((row) => this.selectedRows.add(row.id));
    } else {
      this.selectedRows.clear();
    }
  }

  toggleRowSelection(rowId: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      this.selectedRows.add(rowId);
    } else {
      this.selectedRows.delete(rowId);
    }
  }

  getUsers() {

    this.apiService.fetchData().subscribe((res: any) => {
      this.gridColumns = res.grid_columns;
      this.gridData = res.grid_data;
      this.loading = false;

      console.log(res);
      console.log(res.grid_columns);
      console.log(res.grid_data);
    });

  }

  deleteUser(rowId: string) {
    const user = this.gridData.find(item => item.id === rowId);
    if (!user) return;
  
    const fullName = `${user.name.first_name} ${user.name.last_name}`;
  
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        name: fullName,
        message: `You want to delete this row?`,
        action: 'delete'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.gridData = this.gridData.filter(item => item.id !== rowId);
      }
    });
  }
  
  editUser(rowId: string): void {
    const user = this.gridData.find(item => item.id === rowId);
    if (!user) return;
  
    const fullName = `${user.name.first_name} ${user.name.last_name}`;
  
    this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        name: fullName,
        action: 'edit'
      }
    });
  }
  
}
