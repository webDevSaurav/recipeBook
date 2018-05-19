import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedView = new EventEmitter<string>()
  constructor(private dataStorageService : DataStorageService,
             private authService : AuthService) { }

  ngOnInit() {
  }

  selectView(view : string){
    this.selectedView.emit(view)
  }

  saveRecipes(){
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response)
      }
    )
  }

  fetchRecipes(){
    this.dataStorageService.fetchData()
  }

  logout(){
    this.authService.logout() 
  }
}