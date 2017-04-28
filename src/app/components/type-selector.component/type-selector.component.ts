import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AppService } from '../../services/app.service';
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
    @Output() myEventTypeSelector: EventEmitter<any> = new EventEmitter();

  constructor(private appService: AppService) { }

  ngOnInit() {
        this.ElementTypes = [];
        this.ElementTypes.push({label:'Documents', value:{id:1, name: 'Documents', code: 'DC'}});
        this.ElementTypes.push({label:'Agents', value:{id:2, name: 'Agents', code: 'AG'}});
        this.ElementTypes.push({label:'Entities', value:{id:3, name: 'Entities', code: 'EN'}});
        this.ElementTypes.push({label:'Others', value:{id:4, name: 'Others', code: 'OT'}});
        this.ElementTypes.push({label:'Templates', value:{id:5, name: 'Templates', code: 'TM'}});
        //set dedault value of type selector
        this.selectedType = this.ElementTypes[0];
        this.appService.setTypeSelector(this.selectedType.value.name);
  }

  onChangeDropDown(e: SelectItem){
    //console.log(e.value.id);
    this.myEventTypeSelector.emit(e.value.name);
    this.appService.setTypeSelector(e.value.name);
  }
}
