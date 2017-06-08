import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth0.service';

@Component({
  moduleId: module.id,
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() { }

}
