import { Component } from '@angular/core';
import { User, ILocation } from './models/user';
import {UserService} from './user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dealerkeep-cli';
  group: any;
  displayedUsers: User[] = [];
  allUsers: User[] = [];
  hereUsers: User[] = [];
  awayUsers: User[] = [];
  term: string;
  showSearch: boolean = false;
  

  constructor(private userService: UserService, public dialog: MatDialog){  }

  ngOnInit() {
    this
      .userService
      .getUsers()
      .subscribe((data: User[]) => {
        this.allUsers = data.map( u => {
          u.callNumber = u.cell ? u.cell : u.phone;
          return u;
        });
        this.hereUsers = this.allUsers.filter(u => u.status == 1);
        this.awayUsers = this.allUsers.filter(u => u.status == 0);
        this.displayedUsers = this.allUsers;
    });
    // initialize to all users
    this.toggleUserList(0);
  }
  
  public toggleUserList(listType: number): void {
    // clear search
    this.term = null;
    if (listType === 0) {
      this.displayedUsers = this.allUsers;
    } else if(listType === 1) {
      this.displayedUsers = this.hereUsers;
    } else if (listType === 2) {
      this.displayedUsers = this.awayUsers;
    }
  }

  showTimeAgo(ts) {
    if (ts == 0) return '';

    var now = (new Date()).getTime();
    var ago = now - ts;
    if (ago < (61 * 1000)) {
        return Math.round(ago / 1000) + ' sec ago';
    } else if (ago < (60 * 60 * 1000)) {
        return Math.round(ago / (60 * 1000)) + ' min ago';
    } else if (ago < (24 * 60 * 60 * 1000)) {
        return Math.round(ago / (60 * 60 * 1000)) + ' hours ago';
    } else {
        var dt = new Date(ts);
        return (1 + dt.getMonth()) + "/" + dt.getDate() + "/" + dt.getFullYear() + " " + dt.getHours() + ":" + dt.getMinutes();
    }
};

}