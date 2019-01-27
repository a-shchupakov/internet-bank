import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import { CompanyService } from './company.service';
import { HttpService } from './http.service';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CardPaymentsComponent } from './admin-panel/card-payments/card-payments.component';
import { AskedPaymentsComponent } from './admin-panel/asked-payments/asked-payments.component';
import { CardPaymentItemComponent } from './admin-panel/card-payments/card-payment-item/card-payment-item.component';
import { SafetyPipe } from './shared/safety.pipe';
import { AskPaymentItemComponent } from './admin-panel/asked-payments/ask-payment-item/ask-payment-item.component';
import { RouterModule, Routes } from '@angular/router';
import { InternetBankComponent } from './internet-bank/internet-bank.component';
import { CompanyPromotionComponent } from './internet-bank/company/company-info/company-promotion/company-promotion.component';
import { CompanyInfoComponent } from './internet-bank/company/company-info/company-info.component';
import { CompanyHeaderComponent } from './internet-bank/company/company-header/company-header.component';
import { PaymentComponent } from './internet-bank/payment/payment.component';
import { PayBlockComponent } from './internet-bank/payment/pay-block/pay-block.component';
import { AskForPaymentBlockComponent } from './internet-bank/payment/ask-for-payment-block/ask-for-payment-block.component';
import { CardPaymentComponent } from './internet-bank/payment/pay-block/card-payment/card-payment.component';
import { InternetBankPaymentComponent } from './internet-bank/payment/pay-block/internet-bank-payment/internet-bank-payment.component';
import {ValidationService} from './shared/validation.service';
import {MaskDirective} from './shared/mask.directive';
import {FormStorageService} from './shared/form-storage.service';
import {TokenService} from './shared/token.service';
import { AuthComponent } from './admin-panel/auth/auth.component';
import {AuthInterceptor} from './shared/auth.interceptor';
import {AuthGuard} from './shared/auth.guard';

const appRoutes: Routes = [
    { path: '', redirectTo: 'bank', pathMatch: 'full' },
    { path: 'admin', component: AdminPanelComponent, canActivate: [AuthGuard], children: [
            { path: '', redirectTo: 'payments', pathMatch: 'full'},
            { path: 'payments', component: CardPaymentsComponent },
            { path: 'asked', component: AskedPaymentsComponent }
        ]},
    { path: 'bank', component: InternetBankComponent, children: [
            { path: '', redirectTo: 'pay', pathMatch: 'full' },
            { path: 'ask', component: AskForPaymentBlockComponent },
            { path: 'pay', component: PayBlockComponent, children: [
                    { path: '', redirectTo: 'card', pathMatch: 'full' },
                    { path: 'card', component: CardPaymentComponent },
                    { path: 'bank-payment', component: InternetBankPaymentComponent }
                ]}
        ]},
    { path: 'auth', component: AuthComponent }
];

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
        AskPaymentItemComponent,
        InternetBankComponent,
        MaskDirective,
        AuthComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CompanyService,
        HttpService,
        ValidationService,
        FormStorageService,
        TokenService,
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
