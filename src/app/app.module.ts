import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { LoginComponent } from '@modules/auth/containers';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { LayoutAuthComponent } from '@modules/navigation/layouts';
import { DetalleTrackingComponent } from './modales/detalle-tracking/detalle-tracking.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsModule } from '@modules/icons/icons.module';
//
import { MatCardModule } from '@angular/material/card';
// import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule, ProgressBarMode} from '@angular/material/progress-bar';
import { ToastrModule } from 'ngx-toastr';
import { UsuarioInterceptorService } from './services/interceptor/usuario-interceptor.service';
import {MatListModule} from '@angular/material/list'; 
import { MatIconModule } from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
    declarations: [
        AppComponent,
        DetalleTrackingComponent,
    ],
    imports: [
        MatPaginatorModule,
        MatTableModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatDialogModule,
        IconsModule,
        MatCardModule,
        // MatDividerModule,
        MatProgressBarModule,
        MatListModule,
        MatIconModule,
        MatTreeModule,
        ToastrModule.forRoot(),
    ],
    entryComponents: [DetalleTrackingComponent],
    providers: [{
        provide:HTTP_INTERCEPTORS,
        useClass:UsuarioInterceptorService,
        multi : true
      }],
    bootstrap: [AppComponent],
})
export class AppModule {}
