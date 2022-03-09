import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,  MatDialogRef, } from '@angular/material/dialog';



@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {
    constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {userName:string, password:string},
    ) {}

    login()
    {
      
    }

}
