import { Component, OnInit } from '@angular/core';
import {Company} from '../company-header/company.model';
import {CompanyService} from '../company.service';

@Component({
    selector: 'app-company-info',
    templateUrl: './company-info.component.html',
    styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
    company: Company;

    constructor(private personService: CompanyService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
    }

}
