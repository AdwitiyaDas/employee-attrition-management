import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginDialogComponent } from './Login/login-dialog.component';
import {Md5} from 'ts-md5/dist/md5';
import { SnowflakeService } from './Services/snowflake.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeFeedback';
  userName='';
  password='';
  md5 = new Md5();
  constructor(public dialog: MatDialog, public snowflakeService: SnowflakeService)
  {
      
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      data: {userName: this.userName, password: this.password},
    });

    dialogRef.afterClosed().subscribe(result => {
      this.userName = result.userName;
      this.password = result.password;
      this.snowflakeService.getLoginInfo(this.userName,this.md5.appendStr(this.password).end().toString())
     
    });
  }
}


