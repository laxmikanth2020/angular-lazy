import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/* angular material modules */
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './basic/header/header.component';
import { MainContentComponent } from './basic/main-content/main-content.component';
import { DataTransferService } from './services/data-transfer.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MainContentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatSidenavModule,
    FormsModule,
  ],
  providers: [provideAnimations(), DataTransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
