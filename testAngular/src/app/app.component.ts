import { AfterViewInit, Component, ViewChild, OnInit, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MentorService } from './mentor.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mentor: any = [];
  displayedColumns: string[] = ['name', 'user', 'entity', 'status', 'action'];
  dataSource = new MatTableDataSource(this.mentor);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private api: MentorService,
  ) {

  }

  ngOnInit() {
    this.listUser();
  }

  listUser() {
    this.api.listStaff().subscribe(response => {
      this.mentor = response;
      this.dataSource = new MatTableDataSource(this.mentor);
      this.dataSource.paginator = this.paginator

      console.log(this.mentor);
    }, (error => {
    }));
  }
  deleteUser(id: any) {

    var r = confirm("Did you delete this data permanently ?");
    if (r == true) {

      this.api.deleteStaff(id).subscribe((response) => {
        this.listUser();
      }, (error => {
      }));
    }
    else {
      return;
    }
  }

  addUser() {
    this.openDialog();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogAddStaff, {
      width: '900px',
      data: 'data'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialogEdit(data: any) {

    const dialogRef = this.dialog.open(DialogEditStaff, {
      width: '900px',
      data: { user: data }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-add-staff',
  templateUrl: './dialog-add-staff.html'
})

export class DialogAddStaff implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  user: any = [];
  private _jsonURL = '.src/app/mentor.json';
  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogAddStaff>,
    private api: MentorService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public sourceData: any,
  ) {


  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.api.listStaff().subscribe(response => {
      this.user = response;
      console.log(this.user);
    }, (error => {
    }));
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  createUser() {
    var count = this.user.length;
    if (count == this.user.length) {
      count++;
    }
    let data = {
      id: count,
      email: this.user.email,
      first_name: this.user.firstName,
      last_name: this.user.lastName,
      civility: this.user.civility,
      company: {
        name: this.user.entitiy,
        user_type: this.user.userType,
      },
      user_status: this.user.userStatus,
      count_document: 15,
    }

    this.api.createStaff(data).subscribe((response) => {
      this.user = response;
      this.reloadCurrentRoute();
      console.log(this.user);
    }, (error => {

    }));
  }
}

@Component({
  selector: 'dialog-edit-staff',
  templateUrl: './dialog-edit-staff.html'
})

export class DialogEditStaff implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  user: any = [];

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<DialogEditStaff>,
    private api: MentorService,
    public router: Router,
    @Inject(MAT_DIALOG_DATA) public sourceData: any,
  ) {
    this.user = sourceData.user;

  }

  ngOnInit() {
    console.log(this.user);

  }


  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  todo: any = [];
  editUser() {

    this.todo = this.user;
    let data = {
      email: this.user.email,
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      civility: this.user.civility,
      company: {
        name: this.user.entity,
        user_type: this.user.user_type,
      },
      user_status: this.user.user_status,
      count_document: 15,
    }
    this.api.updateStaff(this.todo.id, data).subscribe((response) => {

      this.reloadCurrentRoute();
    }, (error => {

    }));
  }


}


