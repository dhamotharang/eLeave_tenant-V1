import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

import { AuthGuardService as AuthGuard } from './services/shared-service/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginPageModule'
  },
  {
    path: 'main/dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/customers',
    loadChildren: './pages/customers/customers.module#CustomersPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/customers/customer-details',
    loadChildren: './pages/customers/customer-details/customer-details.module#CustomerDetailsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/customers/addnewcustomer',
    loadChildren: './pages/customers/addnewcustomer/addnewcustomer.module#AddnewcustomerPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/subscriptions',
    loadChildren: './pages/subscriptions/subscriptions.module#SubscriptionsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/subscriptions/subscriber-details',
    // path: 'main/subscriptions/subscriber-details',
    loadChildren: './pages/subscriptions/subscriber-details/subscriber-details.module#SubscriberDetailsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/support',
    loadChildren: './pages/support/support.module#SupportPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'main/settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  },
  {
    path: 'reset-password/:token',
    loadChildren: './auth/reset-password/reset-password.module#ResetPasswordPageModule'
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
