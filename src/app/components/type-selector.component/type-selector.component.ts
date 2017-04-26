import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  moduleId: module.id,
  selector: 'type-selector',
  templateUrl: 'type-selector.component.html',
  styleUrls: ['type-selector.component.css']
})
export class TypeSelectorComponent implements OnInit {

    private ElementTypes: SelectItem[];
    private selectedType: SelectItem;

  constructor() { }

  ngOnInit() {
        this.ElementTypes = [];
        this.ElementTypes.push({label:'Documents', value:{id:1, name: 'Documents', code: 'DC'}});
        this.ElementTypes.push({label:'Agents', value:{id:2, name: 'Agents', code: 'AG'}});
        this.ElementTypes.push({label:'Entities', value:{id:3, name: 'Entities', code: 'EN'}});
        this.ElementTypes.push({label:'Others', value:{id:4, name: 'Others', code: 'OT'}});
        this.ElementTypes.push({label:'Templates', value:{id:5, name: 'Templates', code: 'TM'}});
        this.selectedType = this.ElementTypes[0];
  }

  onChangeDropDown(e: SelectItem){
    //console.log(e.value);
  }
}
