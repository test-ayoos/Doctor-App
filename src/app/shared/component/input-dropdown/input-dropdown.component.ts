import { Component, OnInit, ViewChild, Renderer2, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: './input-dropdown.component.html',
  styleUrls: ['./input-dropdown.component.scss'],
})
export class InputDropdownComponent implements OnInit {

  @ViewChild('inputContainer') inputContainer:ElementRef;

  @ViewChild('badgeContainer') badgeContainer:ElementRef;

  @ViewChild('input') input:ElementRef;

  @Input() options: String[];

  @Input() fillOptions;

  value: String;

  selected:String;

  selects:String[] = [];

  @Input() placeholder:String;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {

  }

  async autocomplete(event) {
    

    
    let count = 0;
    
    if(this.value === "") {
      this.inputContainer.nativeElement.style="display:none";    }
    else {

      this.inputContainer.nativeElement.innerHTML = "";

      let  x = this.inputContainer.nativeElement.parentNode.getBoundingClientRect();
  
      this.inputContainer.nativeElement.style.display = "flex";
      this.inputContainer.nativeElement.style.width = "100%";

      await this.options.forEach((option)=>
      {

        if(this.value.substr(0 , this.value.length).toUpperCase() === option.substr(0,this.value.length).toUpperCase()) {
  
          count++;

          let div:HTMLDivElement = this.renderer.createElement('p');
          div.addEventListener("click" , (event)=>{

            this.inputContainer.nativeElement.style="display:none";
            this.value = "";
            this.selected = event.toElement.innerHTML;

            let p = this.renderer.createElement('p');
            this.input.nativeElement.focus();

            p.addEventListener('click' , (event)=>{

                this.options.push(event.target.innerHTML)
                event.target.remove();
                this.input.nativeElement.focus();
            });

            let ptxt = this.renderer.createText(this.selected.toString());

            let tmpSelected = this.selected;

            this.selects.push(tmpSelected);

            p.appendChild(ptxt);

            this.badgeContainer.nativeElement.appendChild(p);

            this.options = this.options.filter(function(value, index, arr){

              return !(value === tmpSelected)});

          })

          let txt = this.renderer.createText(option.toString());
  
          this.renderer.appendChild(div,txt);
  
          this.renderer.appendChild(this.inputContainer.nativeElement , div);

          this.inputContainer.nativeElement.focus();

          this.input.nativeElement.focus();
        }
      });
  
    }

    if(count==0) {
      this.inputContainer.nativeElement.innerHTML="No Matches found";
    }
  }

}
