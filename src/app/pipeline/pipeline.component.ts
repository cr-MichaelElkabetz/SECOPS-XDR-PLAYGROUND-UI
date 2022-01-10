import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data/data.service";
import {Response} from '../model/response';

@Component({
  selector: 'app-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.sass']
})
export class PipelineComponent implements OnInit {

  input: any;
  output: any = '';
  outputName: any = "Transparency";
  outputNumber: number = 5;
  showAlert: boolean = false;
  timeElapsed: any = '';
  requestPerformed: boolean = false;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  produceMessage(message: string) {
    this.showAlert = true;
    this.requestPerformed = true;
    this.delay(1.5).then(r => this.showAlert = false);
    this.dataService.produceMessage(message, this.outputName).subscribe((response: Response) => {
      if (response !== undefined) {
        this.output = JSON.stringify(response.message, null, 4);
        this.timeElapsed = response.timeElapsed;
        this.requestPerformed = false;
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
    } else if (this.outputNumber === 5) {
      this.outputName = 'Transparency';
    }
    this.requestPerformed = false;
  }

  delay(seconds: number) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 1000);
    });
  }
}
