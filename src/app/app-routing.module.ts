import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
 
  {
    path: 'service-request',
    loadChildren: () => import('./service-request/service-request.module').then( m => m.ServiceRequestPageModule)
  },
  {
    path: 'installation-request',
    loadChildren: () => import('./installation-request/installation-request.module').then( m => m.InstallationRequestPageModule)
  },
  {
    path: 'only-accessory',
    loadChildren: () => import('./only-accessory/only-accessory.module').then( m => m.OnlyAccessoryPageModule)
  },
  {
    path: 'extend-warrenty',
    loadChildren: () => import('./extend-warrenty/extend-warrenty.module').then( m => m.ExtendWarrentyPageModule)
  },
 
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'footer',
    loadChildren: () => import('./footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'app-feedback',
    loadChildren: () => import('./app-feedback/app-feedback.module').then( m => m.AppFeedbackPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  },
  {
    path: 'aboutus',
    loadChildren: () => import('./aboutus/aboutus.module').then( m => m.AboutusPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'verifymobile',
    loadChildren: () => import('./verifymobile/verifymobile.module').then( m => m.VerifymobilePageModule)
  },
  {
    path: 'verify-otp2',
    loadChildren: () => import('./verify-otp2/verify-otp2.module').then( m => m.VerifyOtp2PageModule)
  },
  {
    path: 'otpconfirm/:number/:otp',
    loadChildren: () => import('./otpconfirm/otpconfirm.module').then( m => m.OtpconfirmPageModule)
  },
  {
    path: 'resetpassword/:number',
    loadChildren: () => import('./resetpassword/resetpassword.module').then( m => m.ResetpasswordPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'rate-technician',
    loadChildren: () => import('./rate-technician/rate-technician.module').then( m => m.RateTechnicianPageModule)
  },
  {
    path: 'resellproduct',
    loadChildren: () => import('./resellproduct/resellproduct.module').then( m => m.ResellproductPageModule)
  },
  {
    path: 'termscondition',
    loadChildren: () => import('./termscondition/termscondition.module').then( m => m.TermsconditionPageModule)
  },
  {
    path: 'admin-section',
    loadChildren: () => import('./admin-section/admin-section.module').then( m => m.AdminSectionPageModule)
  },
  {
    path: 'resell-request-list',
    loadChildren: () => import('./resell-request-list/resell-request-list.module').then( m => m.ResellRequestListPageModule)
  },
  {
    path: 'service-request-list',
    loadChildren: () => import('./service-request-list/service-request-list.module').then( m => m.ServiceRequestListPageModule)
  },
  {
    path: 'installation-request-list',
    loadChildren: () => import('./installation-request-list/installation-request-list.module').then( m => m.InstallationRequestListPageModule)
  },
  {
    path: 'accessory-request-list',
    loadChildren: () => import('./accessory-request-list/accessory-request-list.module').then( m => m.AccessoryRequestListPageModule)
  },
  {
    path: 'extend-warranty-request-list',
    loadChildren: () => import('./extend-warranty-request-list/extend-warranty-request-list.module').then( m => m.ExtendWarrantyRequestListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
