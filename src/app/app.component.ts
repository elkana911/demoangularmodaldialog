import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoangularmodaldialog';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
