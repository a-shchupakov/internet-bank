import { Component, OnInit } from '@angular/core';
import {Company} from './company.model';
import {CompanyService} from '../company.service';

@Component({
    selector: 'app-company-header',
    templateUrl: './company-header.component.html',
    styleUrls: ['./company-header.component.css']
})
export class CompanyHeaderComponent implements OnInit {
    company: Company;

    constructor(private personService: CompanyService) { }

    ngOnInit() {
        this.company = this.personService.getPerson();
    }
}
