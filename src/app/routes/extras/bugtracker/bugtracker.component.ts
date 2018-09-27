import { Component, OnInit, ViewChild } from '@angular/core';

import { ColorsService } from '../../../shared/colors/colors.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
const _clone = (d) => JSON.parse(JSON.stringify(d));
@Component({
    selector: 'app-bugtracker',
    templateUrl: './bugtracker.component.html',
    styleUrls: ['./bugtracker.component.scss']
})
export class BugtrackerComponent implements OnInit {

    sparkOptionsInfo = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('info')],
        height: 50
    };

    sparkOptionsWarning = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('warning')],
        height: 50
    };

    sparkOptionsSuccess = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('success')],
        height: 50
    };

    sparkOptionsDanger = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('danger')],
        height: 50
    };



    ngOnInit() {
    }

    editing = {};
    rows = [];
    rowsFilter = [];
    rowsExp = [];
    rowsSort = [];
    temp = [];
    expanded: any = {};
    timeout: any;

    rowsSel = [];
    selected = [];

    columns = [
        { prop: 'name' },
        { name: 'Company' },
        { name: 'Gender' }
    ];
    columnsSort = [
        { prop: 'name' },
        { name: 'Company' },
        { name: 'Gender' }
    ];
    @ViewChild(DatatableComponent) table: DatatableComponent;
    @ViewChild('myTable') tableExp: any;

    constructor(public colors: ColorsService) {

        this.fetch((data) => {
            // cache our list
            this.temp = _clone(data);

            this.rows = _clone(data);;
            this.rowsFilter = _clone(data);;
            this.rowsExp = _clone(data);
            this.rowsSort = _clone(data);
            this.rowsSel = _clone(data);

        });

    }

    onPage(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            console.log('paged!', event);
        }, 100);
    }
    toggleExpandRow(row) {
        console.log('Toggled Expand Row!', row);
        this.tableExp.rowDetail.toggleExpandRow(row);
    }

    onDetailToggle(event) {
        console.log('Detail Toggled', event);
    }

    fetch(cb) {
        const req = new XMLHttpRequest();
        req.open('GET', `assets/company.json`);

        req.onload = () => {
            cb(JSON.parse(req.response));
        };

        req.send();
    }

    updateValue(event, cell, rowIndex) {
        console.log('inline editing rowIndex', rowIndex)
        this.editing[rowIndex + '-' + cell] = false;
        this.rows[rowIndex][cell] = event.target.value;
        this.rows = [...this.rows];
        console.log('UPDATED!', this.rows[rowIndex][cell]);
    }

 
    updateFilter(event) {
        const val = event.target.value.toLowerCase();

        // filter our data
        const temp = this.temp.filter(function(d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.rowsFilter = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    // Selection


    onSelect({ selected }) {
        console.log('Select Event', selected, this.selected);

        this.selected.splice(0, this.selected.length);
        this.selected.push(...selected);
    }

    onActivate(event) {
        console.log('Activate Event', event);
    }

}
