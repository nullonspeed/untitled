import { Component } from '@angular/core';
import { MyService } from './MyService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private myService: MyService) {
    myService.transformedStream$.subscribe(
      result => console.log(result),
      error => console.error(error),
      () => console.log('Completed')
    );
  }





}
