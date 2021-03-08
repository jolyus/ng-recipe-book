import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { ToggleSideBarService } from './core/components/services/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ToggleSideBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
