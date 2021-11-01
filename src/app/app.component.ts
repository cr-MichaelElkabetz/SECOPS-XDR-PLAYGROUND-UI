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
  outputName: any = "Router";
  outputNumber: number = 4;
  showAlert: boolean = false;


  constructor(private dataService: DataService) {
  }

  produceMessage(message: string) {
    this.showAlert = true;
    this.output = '';
    this.delay(1.5).then(r => this.showAlert = false);
    this.dataService.produceMessage(message, this.outputName).subscribe((response: Response) => {
      if (response !== undefined) {
        this.output = response.message;
      }
    });
  }

  update(selectedNode: number) {
    this.outputNumber = selectedNode;
    if (this.outputNumber === 1) {
      this.outputName = 'Transformer';
    } else if (this.outputNumber === 2) {
      this.outputName = 'Identity';
    } else if (this.outputNumber === 3) {
      this.outputName = 'Threat';
    } else if (this.outputNumber === 4) {
      this.outputName = 'Router';
    }
  }

  delay(seconds: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }
}
