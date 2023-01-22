import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testserver';
  userName = '';
  disableNewUserName = true;
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server Created. Server name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target).value
  }

  changeUserName(event) {
    this.userName = event.target.value;
    this.checkUserName();
  }

  addUsername() {
    this.userName = '';
  }

  checkUserName() {
    this.userName === '' ?
      this.disableNewUserName = true :
      this.disableNewUserName = false;
  }

}
