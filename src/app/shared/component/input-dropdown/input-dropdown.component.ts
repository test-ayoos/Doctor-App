import { Component, OnInit, ViewChild, Renderer2, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
})
export class InputDropdownComponent implements OnInit {

  value: String = "";

  isOn : Boolean = false;

  selects:String[] = [];

  @Input() options:String[] = [];

  @Input() tmpOptions:String[] = []

  @Input() placeholder:String;

  @ViewChild('inputBox') inputBox:ElementRef;

  @ViewChild('suggetionBox') suggetionBox:ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  close() {

      this.isOn = false;
  }

  removeItem(option) {

      this.selects = this.selects.filter(function(val, index, arr){

        return !(val === option)});

      this.options.push(option);
  }

  selectMatching(value:any) {

    this.selects.push(value);
    this.options = this.options.filter(function(val, index, arr){

      return !(val === value)});

    this.isOn = false;
    this.value = "";

    this.inputBox.nativeElement.focus();
  }

  findMatching() {

    this.tmpOptions = [];

    if(this.value.length != 0) {

      this.isOn = true;
      
      for(let option of this.options) {

        if(this.value.substr(0 , this.value.length).toUpperCase() === option.substr(0,this.value.length).toUpperCase()) {
  
          this.tmpOptions.push(option);
        }
      }
    }
    else {

      this.isOn = false;
      this.value = "";
    }

    this.suggetionBox.nativeElement.focus();

    this.inputBox.nativeElement.focus();

  


  }

}
