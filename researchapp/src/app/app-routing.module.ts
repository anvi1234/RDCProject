import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { WhyusComponent } from './whyus/whyus.component';
import { PartnerwithusComponent } from './partnerwithus/partnerwithus.component';
import { OrderComponent } from './order/order.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BuyComponent } from './buy/buy.component';
import { ThesisComponent } from './thesis/thesis.component';
import { ProvisonalComponent } from './provisonal/provisonal.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ConstraintsComponent } from './constraints/constraints.component';
import { BlogsComponent } from './blogs/blogs.component';
import { AdminblogComponent } from './adminblog/adminblog.component';


const routes: Routes = [
  {path:"contact",component:ContactComponent},
  {path:"whyus",component:WhyusComponent},
  {path:"partner",component:PartnerwithusComponent},
  {path:"order",component:OrderComponent},
  {path:"home",component:MainComponent},
  {path:"buy",component:BuyComponent},
  {path:"adminblog",component:AdminblogComponent},
  {path:"blogs",component:BlogsComponent},
  {path:"thesis/provisional",component:ProvisonalComponent},
  {path:"thesis/presentation",component:PresentationComponent},
  {path:"constraints",component:ConstraintsComponent},
  {path:"thesis",component:ThesisComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:" ",component:MainComponent},
  {path:"**",component:MainComponent},
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
