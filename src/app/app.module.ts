import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CompanyPromotionComponent } from './company-info/company-promotion/company-promotion.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyHeaderComponent } from './company-header/company-header.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
    declarations: [
        AppComponent,
        CompanyPromotionComponent,
        CompanyInfoComponent,
        CompanyHeaderComponent,
        PaymentComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
