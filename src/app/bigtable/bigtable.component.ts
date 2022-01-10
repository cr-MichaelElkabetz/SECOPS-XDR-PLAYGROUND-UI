import {Component, OnInit} from '@angular/core';
import {DataService} from "../service/data/data.service";
import {BigtableAccountRow} from "../model/bigtableAccountRow";
import {BigtableIdentityRow} from "../model/bigtableIdentityRow";

@Component({
  selector: 'app-bigtable',
  templateUrl: './bigtable.component.html',
  styleUrls: ['./bigtable.component.sass']
})
export class BigtableComponent implements OnInit {

  total: number = 0;
  loading: boolean = true;
  bigtableDataUserAccounts!: BigtableAccountRow[];
  bigtableDataUserIdentities!: BigtableIdentityRow[];

  isProd: boolean = true;
  isAccounts: boolean = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getBigtableUserAccounts().subscribe((bigtableData: BigtableAccountRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableDataUserAccounts = bigtableData;
        this.total = this.bigtableDataUserAccounts.length;
        this.loading = false;
      }
    });
    this.dataService.getBigtableUserIdentities().subscribe((bigtableData: BigtableIdentityRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableDataUserIdentities = bigtableData;
        this.total = this.bigtableDataUserIdentities.length;
        this.loading = false;
      }
    });
  }

  updateView(): void {
    const accounts = document.getElementById("btn-demo-radio-accounts") as HTMLInputElement;
    if (accounts.checked) {
      this.isAccounts = true;
    } else {
      this.isAccounts = false
    }
  }
}
