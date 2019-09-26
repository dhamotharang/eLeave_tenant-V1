import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'
  },
  {
    path: 'main/customers',
    loadChildren: './pages/customers/customers.module#CustomersPageModule'
  },
  {
    path: 'main/customers/customer-details',
    loadChildren: './pages/customers/customer-details/customer-details.module#CustomerDetailsPageModule'
  },
  {
    path: 'main/customers/addnewcustomer',
    loadChildren: './pages/customers/addnewcustomer/addnewcustomer.module#AddnewcustomerPageModule'
  },
  {
    path: 'main/subscriptions',
    loadChildren: './pages/subscriptions/subscriptions.module#SubscriptionsPageModule'
  },
  {
    path: 'main/subscriptions/subscriber-details',
    loadChildren: './pages/subscriptions/subscriber-details/subscriber-details.module#SubscriberDetailsPageModule'
  },
  {
    path: 'main/support',
    loadChildren: './pages/support/support.module#SupportPageModule'
  },
  {
    path: 'main/settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  },
  {
    path: 'forgot-password',
    loadChildren: './auth/forgot-password/forgot-password.module#ForgotPasswordPageModule'
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
