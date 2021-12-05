import {Component, OnInit} from '@angular/core';
import {ClrDatagridStateInterface} from "@clr/angular";
import {DataService} from "../service/data/data.service";
import {UserAccount} from "../model/userAccount";

@Component({
  selector: 'app-bigtable',
  templateUrl: './bigtable.component.html',
  styleUrls: ['./bigtable.component.sass']
})
export class BigtableComponent implements OnInit {

  total: number = 0;
  loading: boolean = true;
  users: UserAccount[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getTenantUserAccounts('fanta').subscribe((userAccounts: UserAccount[]) => {
      if (userAccounts !== undefined) {
        this.users = userAccounts;
        this.total = userAccounts.length;
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
  }

  refresh(state: ClrDatagridStateInterface) {
    this.loading = true;
    // We convert the filters from an array to a map,
    // because that's what our backend-calling service is expecting
    let filters: { [prop: string]: any[] } = {};
    if (state.filters) {
      for (let filter of state.filters) {
        let {property, value} = <{ property: string; value: string }>filter;
        filters[property] = [value];
      }
    }
  }
}
