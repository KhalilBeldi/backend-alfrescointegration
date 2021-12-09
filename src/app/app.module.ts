import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AlfrescoWorkComponent } from './alfresco-work/alfresco-work.component';




@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
   
    EditComponent,
    EditProductComponent,
    AlfrescoWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,


    
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
