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
  bigtableProdDataUserAccounts!: BigtableAccountRow[];
  bigtableProdDataUserIdentities!: BigtableIdentityRow[];
  bigtableDevDataUserAccounts!: BigtableAccountRow[];
  bigtableDevDataUserIdentities!: BigtableIdentityRow[];

  isProd: boolean = true;
  isAccounts: boolean = true;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getProdBigtableUserAccounts().subscribe((bigtableData: BigtableAccountRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableProdDataUserAccounts = bigtableData;
        this.total = this.bigtableProdDataUserAccounts.length;
        this.loading = false;
      }
    });
    this.dataService.getProdBigtableUserIdentities().subscribe((bigtableData: BigtableIdentityRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableProdDataUserIdentities = bigtableData;
        this.total = this.bigtableProdDataUserIdentities.length;
        this.loading = false;
      }
    });

    this.dataService.getDevBigtableUserAccounts().subscribe((bigtableData: BigtableAccountRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableDevDataUserAccounts = bigtableData;
        this.total = this.bigtableDevDataUserAccounts.length;
        this.loading = false;
      }
    });
    this.dataService.getDevBigtableUserIdentities().subscribe((bigtableData: BigtableIdentityRow[]) => {
      if (bigtableData !== undefined) {
        this.bigtableDevDataUserIdentities = bigtableData;
        this.total = this.bigtableDevDataUserIdentities.length;
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

  updateMode() {
    const prod = document.getElementById("btn-demo-radio-prod") as HTMLInputElement;
    if (prod.checked) {
      this.isProd = true;
    } else {
      this.isProd = false
    }
  }
}
