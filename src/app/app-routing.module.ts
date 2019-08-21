import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
  {
    path: 'main/home',
    loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule'
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
    path: 'main/subscriptions/add-new-subscriber',
    loadChildren: './pages/subscriptions/add-new-subscriber/add-new-subscriber.module#AddNewSubscriberPageModule'
  },
  {
    path: 'main/support',
    loadChildren: './pages/support/support.module#SupportPageModule'
  },
  {
    path: 'main/settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
