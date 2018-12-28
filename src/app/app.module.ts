import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CompanyPromotionComponent } from './company-info/company-promotion/company-promotion.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyHeaderComponent } from './company-header/company-header.component';
import { PaymentComponent } from './payment/payment.component';
import { PayBlockComponent } from './payment/pay-block/pay-block.component';
import { AskForPaymentBlockComponent } from './payment/ask-for-payment-block/ask-for-payment-block.component';
import { CardPaymentComponent } from './payment/pay-block/card-payment/card-payment.component';
import { InternetBankPaymentComponent } from './payment/pay-block/internet-bank-payment/internet-bank-payment.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CompanyPromotionComponent,
        CompanyInfoComponent,
        CompanyHeaderComponent,
        PaymentComponent,
        PayBlockComponent,
        AskForPaymentBlockComponent,
        CardPaymentComponent,
        InternetBankPaymentComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
