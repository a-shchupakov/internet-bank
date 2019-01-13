import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import { CompanyPromotionComponent } from './company-info/company-promotion/company-promotion.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyHeaderComponent } from './company-header/company-header.component';
import { PaymentComponent } from './payment/payment.component';
import { PayBlockComponent } from './payment/pay-block/pay-block.component';
import { AskForPaymentBlockComponent } from './payment/ask-for-payment-block/ask-for-payment-block.component';
import { CardPaymentComponent } from './payment/pay-block/card-payment/card-payment.component';
import { InternetBankPaymentComponent } from './payment/pay-block/internet-bank-payment/internet-bank-payment.component';
import { CompanyService } from './company.service';
import { HttpService } from './http.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CardPaymentsComponent } from './admin-panel/card-payments/card-payments.component';
import { AskedPaymentsComponent } from './admin-panel/asked-payments/asked-payments.component';
import { CardPaymentItemComponent } from './admin-panel/card-payments/card-payment-item/card-payment-item.component';
import { SafetyPipe } from './shared/safety.pipe';
import { AskPaymentItemComponent } from './admin-panel/asked-payments/ask-payment-item/ask-payment-item.component';

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
        InternetBankPaymentComponent,
        AdminPanelComponent,
        CardPaymentsComponent,
        AskedPaymentsComponent,
        CardPaymentItemComponent,
        SafetyPipe,
        AskPaymentItemComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [CompanyService, HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
