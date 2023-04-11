import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{
    isAuthenticated: boolean = false;
    private userSub!: Subscription;

    constructor(private dataStorageService: DataStorageService,
        private authService: AuthService) {}
    
    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.isAuthenticated = user ? true : false;
        })
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }
    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }
    logout() {
        this.authService.logout();
    }
    ngOnDestroy(): void {
        this.userSub.unsubscribe();
    }
    
}