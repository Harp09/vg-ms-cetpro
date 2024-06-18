import { Component, OnInit } from '@angular/core';
import { Cetpro } from 'src/app/interfaces/Cetpro';
import { ApiService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-cetpro-page',
  templateUrl: './cetpro-page.component.html',
  styles: [
  ]
})
export class CetproPageComponent implements OnInit {
  list: Cetpro[] = [];
  selectedItem: Cetpro | null = null;
  showForm: boolean = false;
  editMode: boolean = false;
  showBtn: boolean = false;
  searchTerm: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  searchData() {
    this.fetchData(this.searchTerm);
  }

  filterData(data: Cetpro[], searchTerm: string): Cetpro[] {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  fetchData(searchTerm: string = ''): void {
    this.showBtn = false;
    this.apiService.getData('active').subscribe(
      (data: Cetpro[]) => {
        this.list = searchTerm ? this.filterData(data, searchTerm) : data;
      }
    );
  }

  fetchDataActive(): void {
    this.showBtn = true;
    this.apiService.getData('inactive').subscribe(
      (data: Cetpro[]) => {
        this.list = data;
      }
    );
  }

  onEditItem(item: Cetpro) {
    this.selectedItem = item;
    this.showForm = true;
    this.editMode = true;
  }

  onShowForm() {
    this.selectedItem = null;
    this.showForm = true;
    this.editMode = false;
  }

  onCloseForm() {
    this.showForm = false;
  }

  refreshData(state: string) {
    if (state === 'deleted') {
      this.fetchData();
    } else if (state === 'restored') {
      this.fetchDataActive();
    }
  }

}
