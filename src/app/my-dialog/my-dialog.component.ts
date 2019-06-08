import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { My2nddialogComponent } from '../my2nddialog/my2nddialog.component';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNestedDialog(): void {

    let dialogRef = this.dialog.open(My2nddialogComponent, {
      //width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
