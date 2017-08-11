import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-script-component',
  templateUrl: './script-component.component.html',
  styleUrls: ['./script-component.component.css']
})
export class ScriptComponentComponent implements OnInit {


  
   @Input()
    src: string;

    @Input()
    type: string;

    @ViewChild('script') script: ElementRef;

  constructor() { }

  ngOnInit() {
    this.convertToScript();
  }


  

    convertToScript() {
        var element = this.script.nativeElement;
        var script = document.createElement("script");
        script.type = this.type ? this.type : "text/javascript";
        if (this.src) {
            script.src = this.src;
        }
        if (element.innerHTML) {
            script.innerHTML = element.innerHTML;
        }
        var parent = element.parentElement;
        parent.parentElement.replaceChild(script, parent);
    }

    ngAfterViewInit() {
        this.convertToScript();
    }

}
