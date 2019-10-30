import { Component } from '@angular/core';
import { Http, Response, RequestMethod, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 4';

  result;
  errorFromSubscribe;
  errorFromCatch;
  displayItems;
  constructor(private http: Http) { }

  onClick() {

    this.http.get('https://api.myjson.com/bins/1gb9tf')
      .subscribe((res: Response) => {
        this.result = res.json();
        this.displayItems = this.result['results'];
      }, error => {
        console.log(error);
        this.errorFromSubscribe = error;
      });
  }
}
