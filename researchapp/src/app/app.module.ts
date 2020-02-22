import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AboutusComponent } from './aboutus/aboutus.component';
import { WhyusComponent } from './whyus/whyus.component';
import { PartnerwithusComponent } from './partnerwithus/partnerwithus.component';
import { ContactComponent } from './contact/contact.component';
import { OrderComponent } from './order/order.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { PurchaseComponent } from './purchase/purchase.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { BuynowComponent } from './buynow/buynow.component';
import { BuyComponent } from './buy/buy.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatInputModule} from '@angular/material/input';
import {FileUploadModule} from 'ng2-file-upload';
import { ThesisComponent } from './thesis/thesis.component';
import { ProvisonalComponent } from './provisonal/provisonal.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { JoinusComponent } from './joinus/joinus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogregisterationComponent } from './blogregisteration/blogregisteration.component';
import { AdminblogComponent } from './adminblog/adminblog.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AboutusComponent,
    WhyusComponent,
    PartnerwithusComponent,
    ContactComponent,
    OrderComponent,
    FooterComponent,
    PurchaseComponent,
    BuynowComponent,
    BuyComponent,
    ThesisComponent,
    ProvisonalComponent,
    PresentationComponent,
    ConstraintsComponent,
    JoinusComponent,
    BlogsComponent,
    BlogregisterationComponent,
    AdminblogComponent,
  ],
  imports: [
    BrowserModule,MatButtonModule,MatCardModule,MatDialogModule,BrowserAnimationsModule,FileUploadModule,PdfViewerModule,MatDatepickerModule,
    AppRoutingModule,MDBBootstrapModule, HttpClientModule,MatInputModule,FormsModule, ReactiveFormsModule,Ng2SearchPipeModule
  ],
  
  providers: [],
  entryComponents:[PurchaseComponent,OrderComponent,JoinusComponent,BlogregisterationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
