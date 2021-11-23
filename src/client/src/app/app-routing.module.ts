import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailsComponent } from './modules/components/currency-details/currency-details.component';
import { SearchComponent } from './modules/components/search/search.component';
import { WatchListComponent } from './modules/components/watch-list/watch-list.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: "Home-Search", component: SearchComponent},
  {path: "currency-details", component: CurrencyDetailsComponent},
  {path: "watchList", component: WatchListComponent},
  {path: "Let's-get-started", loadChildren :
  () => import('./modules/user/user.module').then(m => m.UserModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
