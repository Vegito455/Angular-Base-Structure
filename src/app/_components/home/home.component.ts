import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: any[] = [];
  currentUser: any;

  eTrade = [{
    name: "ENIT COMPLIANCE",
    menuCode: "eCompliance",
    iconName: "ec",
    userMenusImpls: [{
      name: "Politically exposed person",
      menuCode: "test",
      userMenusImpls: [
        {
          name: "Submit Declaration",
          menuCode: "test",
        },
        {
          name: "Annexure format",
        }, { name: "MIS VIew", },]
    }, { name: "Director details", menuCode: "test", userMenusImpls: [{ name: "Director details submenu", menuCode: "test", },] }, { name: "Key management personnel", menuCode: "test", userMenusImpls: [{ name: "Key management personnel submenu", menuCode: "test", },] }, { name: "ML and AI", menuCode: "test", userMenusImpls: [{ name: "ML and AI submenu", menuCode: "test", },] }, { name: "Annual Returen", menuCode: "test", userMenusImpls: [{ name: "Annual Returen submenu", menuCode: "test", },] }]
  }, {

    name: "ENIT TRADE", menuCode: "eTrade", iconName: "et", userMenusImpls: [{ name: "Member Reporting Pre Trade", menuCode: "eMemberReportingPreTrade", userMenusImpls: [{ name: "CTCL ID Activation", menuCode: "loadCtclActivation", }, { name: "CTCL ID Deactivation", menuCode: "displayCtclDeactivation", }, { name: "CTCL ID Modification", menuCode: "displayCtclModification", }] }, { name: "NNF", menuCode: "eNNF", userMenusImpls: [{ name: "Algo Approval", menuCode: "loadAlgoApproval", }, { name: "Algo undertaking", menuCode: "displayAlgoUndertakingDetails", }, { name: "approval mis reposrt", menuCode: "nnfAppMISReport", },] }, { name: "Password Reset and Unlock user id", menuCode: "eUnlockuser", userMenusImpls: [{ name: "Request status", menuCode: "displayPasswordMis", }, { name: "request for password reset", menuCode: "anewRequestPwdReset", },] }, { name: "User Id request", menuCode: "eUseridRequest", userMenusImpls: [{ name: "change username", menuCode: "displayChngNeatUsrNmRequest", },] }]
  }];

  constructor(private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}