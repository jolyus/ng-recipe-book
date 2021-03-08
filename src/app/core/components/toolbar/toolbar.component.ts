import { Component } from '@angular/core';
import { ToggleSideBarService } from '../services/sidebar.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private toggleSidebarService: ToggleSideBarService) { }

  toggleSideNav() {
    this.toggleSidebarService.toggle();
  }
}
