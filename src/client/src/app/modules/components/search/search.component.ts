import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  myControl  = new FormControl();
  options: string[] = ['BTC', 'ETH', 'DOGE', 'MANA', 'NPXS', 'DASH'];
  filteredOptions!: Observable<any>;
  search?: string;
  selected: boolean = false;
  name: any;
  data: any;
  err: any;
  cArr: any;
  inputSearch: any;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['', Validators.required]
    });

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(),
      map(value => this._filter(value))
    )
   }

  ngOnInit(): void {
  }

  private _filter(value:string): string[]{
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0)
  }

  searchFor(){
    this.name = (this.searchForm.value.search);
    this.selected = true;
  }
}
