import {CompanyPromotion} from '../company-info/company-promotion/company-promotion.model';

export class Company {
    constructor(
        public name: string,
        public phone: string,
        public site: string,
        public mail: string,
        public promotions: CompanyPromotion[]
    ) { }
}
