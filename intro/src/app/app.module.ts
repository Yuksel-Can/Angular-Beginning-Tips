import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes,RouterModule} from '@angular/router'; 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AlertifyService } from './services/alertify.service';
import { PostFilterPipe } from './post/post-filter.pipe';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {path:"posts", component:PostComponent},
  {path:"", redirectTo:"posts", pathMatch:"full"},        // "" adresine gidilirse "posts a atıyor"
  {path:"posts", component:PostComponent},
  {path:"posts/:userid", component:PostComponent}
]




@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
