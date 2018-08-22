import { Component, OnInit } from '@angular/core';
import { User, ILocation } from './models/user';
import { UserService } from './user.service';
import { MatDialog, MatIconRegistry, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dealerkeep-cli';
  group: any;
  displayedUsers: User[] = [];
  allUsers: User[] = [];
  hereUsers: User[] = [];
  awayUsers: User[] = [];
  term: string;
  showSearch = false;

  constructor(
    private userService: UserService,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'lexus',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/Lexus_L.svg')
    );
  }

  ngOnInit() {
    this
      .userService
      .getUsers()
      .subscribe((data: User[]) => {
        this.allUsers = data.map(u => {
          u.callNumber = u.cell ? u.cell : u.phone;
          return u;
        });
        this.hereUsers = this.allUsers.filter(u => u.status === 1);
        this.awayUsers = this.allUsers.filter(u => u.status === 0);
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
    } else if (listType === 1) {
      this.displayedUsers = this.hereUsers;
    } else if (listType === 2) {
      this.displayedUsers = this.awayUsers;
    }
  }

  showTimeAgo(ts) {
    if (ts === 0) { return ''; }

    const now = (new Date()).getTime();
    const ago = now - ts;
    if (ago < (61 * 1000)) {
      return Math.round(ago / 1000) + ' sec ago';
    } else if (ago < (60 * 60 * 1000)) {
      return Math.round(ago / (60 * 1000)) + ' min ago';
    } else if (ago < (24 * 60 * 60 * 1000)) {
      return Math.round(ago / (60 * 60 * 1000)) + ' hours ago';
    } else {
      const dt = new Date(ts);
      return (1 + dt.getMonth()) + '/' + dt.getDate() + '/' + dt.getFullYear() + ' ' + dt.getHours() + ':' + dt.getMinutes();
    }
  }
}
