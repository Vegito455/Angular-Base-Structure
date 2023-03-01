import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertToastrComponent } from './_components/alert-toastr/alert-toastr.component';
import { HomeMaterialComponent } from './_components/home-material/home-material.component';
import { HomeComponent } from './_components/home/home.component';
import { LoadingSpinnerComponent } from './_components/loading-spinner/loading-spinner.component';
import { LoginComponent } from './_components/login/login.component';
import { NotFoundComponent } from './_components/not-found/not-found.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'home-material', component: HomeMaterialComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent },

  { path: 'loading-spinner', component: LoadingSpinnerComponent },
  { path: 'alert-toastr', component: AlertToastrComponent },

  // url not found
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
