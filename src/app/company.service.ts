import {Company} from './internet-bank/company/company-header/company.model';
import {CompanyPromotion} from './internet-bank/company/company-info/company-promotion/company-promotion.model';


export class CompanyService {
    company: Company = new Company(
        'Индивидуальный предприниматель Швецова Мария Валерьевна',
        '+79193977777',
        'www.mary.com',
        'mary@tochka.com',
        [
            new CompanyPromotion('Клубника на улице Рамбла', 'mountain-balloon.jpg', '139,99 руб.'),
            new CompanyPromotion('Золотой пляж', 'beach.jpg', '12000 руб.'),
            new CompanyPromotion('Экскурсии', 'excursion.jpg', '1000р/час.')
        ]
    );

    constructor() { }

    getPerson() {
        return this.company;
    }
}
