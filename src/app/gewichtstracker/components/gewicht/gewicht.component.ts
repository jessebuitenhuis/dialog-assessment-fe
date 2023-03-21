import { Component } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'trackapp-gewicht',
    styleUrls: ['gewicht.component.scss'],
    templateUrl: 'gewicht.component.html'

})
export class GewichtComponent {
    gewichtForm = new FormGroup({
        gewicht: new FormControl(''),
        toelichting: new FormControl(''),
      });
}