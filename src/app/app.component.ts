import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  constructor(private  httpClient: HttpClient) {}

  getschool() {
    this.httpClient.get('http://13.126.82.194:3000/api/about-us')
      .subscribe((response)=>{
        console.log(response);
      },
        error=>{

        console.log(error);
        });
  }


}
