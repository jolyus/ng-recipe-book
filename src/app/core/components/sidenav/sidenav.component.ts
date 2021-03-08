import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ToggleSideBarService } from '../services/sidebar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;

  constructor(private toggleSidebarService: ToggleSideBarService) { }

  ngAfterViewInit(): void {
		this.toggleSidebarService.setSidenav(this.sidenav);
	}
}
