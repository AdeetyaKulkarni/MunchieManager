import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  // angular material resources, make sure to npm install after pulls
  // https://material.angular.io/

  // routing achieved with these resources
  // https://material.angular.io/components/tabs/overview
  // https://www.youtube.com/watch?v=Zk-2CBKiMtU

  linksForManager = [
    { path: 'manager-dashboard', label: 'Manager Dashboard' },
    { path: 'inventory-manager', label: 'Inventory Manager' },
    { path: 'good-trends', label: 'Good Trends' },
    { path: "restaurant-trends", label: 'Restaurant Trends' },
    { path: "reporting", label: 'Reporting' },
    { path: "menu-creation", label: 'Menu Creation' },
  ];

  linksForEmployee = [
    { path: 'manager-dashboard', label: 'Employee Dashboard' },
    { path: 'inventory-manager', label: 'Inventory Manager' },
  ];

  manager_privilege = false;

  constructor(private router : Router ) { }

  ngOnInit() {
    let privilege = localStorage.getItem("user_privilege");
    if(privilege == '0'){
      this.manager_privilege = true;
    }
  }

  
}
