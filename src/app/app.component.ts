import {Component} from '@angular/core';
import {DataService} from "./service/data/data.service";
import {Response} from './model/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'xdr-simulator';
  input: any;
  output: any;
  msOutput: any = "Router";
  showAlert: boolean = false;


  constructor(private dataService: DataService) {
  }

  sendMessage(message: string) {
    this.showAlert = true;
    this.delay(1.5).then(r => this.showAlert = false);
    this.dataService.sendMessage(message).subscribe((response: Response) => {
      if (response !== undefined) {
        this.output = response.message;
      }
    });
  }

  update(msName: string) {
    this.msOutput = msName;
  }

  delay(seconds: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }
}
