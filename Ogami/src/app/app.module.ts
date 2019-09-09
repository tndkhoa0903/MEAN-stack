import { AuthService } from './services/auth.service';
import { MaterialModule } from './modules/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoComponent } from './shared/info/info.component';
import { RegisterComponent } from './forms/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { DepartmentsComponent } from './shared/departments/departments.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/footer/footer.component';
import { FbannerComponent } from './shared/footer/fbanner/fbanner.component';
import { FnavbarComponent } from './shared/footer/fnavbar/fnavbar.component';
import { FsubComponent } from './shared/footer/fsub/fsub.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './features/homepage/homepage-feat/banner/banner.component';
import { FeatureComponent } from './features/homepage/homepage-feat/feature/feature.component';
import { TypeproductsComponent } from './features/homepage/homepage-feat/typeproducts/typeproducts.component';
import { SliderbannerComponent } from './features/homepage/homepage-feat/sliderbanner/sliderbanner.component';
import { DealoftheweekComponent } from './features/homepage/homepage-feat/dealoftheweek/dealoftheweek.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { FaqComponent } from './features/faq/faq.component';
@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    routingComponents,
    RegisterComponent,
    HeaderComponent,
    DepartmentsComponent,
    FooterComponent,
    FbannerComponent,
    FnavbarComponent,
    FsubComponent,
    HomepageComponent,
    BannerComponent,
    FeatureComponent,
    TypeproductsComponent,
    SliderbannerComponent,
    DealoftheweekComponent,
    PagenotfoundComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    NgbModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
