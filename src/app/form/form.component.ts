import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  addQuote(Username:HTMLInputElement, Quote:HTMLInputElement, author:HTMLInputElement):boolean{
    let usedname=alert(`${Username.value}`);

return false;
}

  ngOnInit(){
}

}
