import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'calendar-dlg',
  templateUrl: 'calendar-dlg.component.html',
  styleUrls: ['calendar-dlg.component.css']
})
export class CalendarDlgComponent implements OnInit {

  display: boolean = false;
  years: SelectItem[];
  months: SelectItem[] = [];
  quartals: SelectItem[] = [];
  semiyears: SelectItem[] = [];
  selectedYear: string;
  selectedMonth: string;
  selectedQurtal: string;
  selectedSemiYear: string;
  selectedType: string;
  startDate:  Date;
  endDate: Date;

  constructor() {
    this.years = [];
  }

  ngOnInit() {
    this.years.push({label: '2015', value: 2015});
    this.years.push({label: '2016', value: 2016});
    this.years.push({label: '2017', value: 2017});
    this.selectedYear = '2017';
    this.months.push({label: 'Январь', value: '01'});
    this.months.push({label: 'Февраль', value: '02'});
    this.months.push({label: 'Март', value: '03'});
    this.months.push({label: 'Апрель', value: '04'});
    this.months.push({label: 'Май', value: '05'});
    this.months.push({label: 'Июнь', value: '06'});
    this.months.push({label: 'Июль', value: '07'});
    this.months.push({label: 'Август', value: '08'});
    this.months.push({label: 'Сентябрь', value: '09'});
    this.months.push({label: 'Октябрь', value: '10'});
    this.months.push({label: 'Ноябрь', value: '11'});
    this.months.push({label: 'Декабрь', value: '12'});
    this.quartals.push({label: 'Первый', value: '1'});
    this.quartals.push({label: 'Второй', value: '2'});
    this.quartals.push({label: 'Третий', value: '3'});
    this.quartals.push({label: 'Четвертый', value: '4'});
    this.semiyears.push({label: 'Первое', value: '1'});
    this.semiyears.push({label: 'Второе', value: '2'});
  }

  showDialog() {
    this.display = true;
  }

  onOkClick(){
    console.log('onOkClick()');
  }

  onSelectStartDate(d: Date){}
  onSelectEndDate(d: Date){}
}
