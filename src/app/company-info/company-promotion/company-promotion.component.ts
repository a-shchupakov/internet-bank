import {Component, Input, OnInit} from '@angular/core';
import {CompanyPromotion} from './company-promotion.model';

@Component({
    selector: 'app-company-promotion',
    templateUrl: './company-promotion.component.html',
    styleUrls: ['./company-promotion.component.css']
})
export class CompanyPromotionComponent implements OnInit {
    @Input() promotion: CompanyPromotion;

    constructor() { }

    ngOnInit() {
    }

}
