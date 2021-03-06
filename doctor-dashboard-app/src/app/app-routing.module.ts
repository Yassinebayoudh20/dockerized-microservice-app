import { AddSuiviComponent } from './home/doctor-management/gestion-suivi/add-suivi/add-suivi.component';
import { GestionSuiviComponent } from './home/doctor-management/gestion-suivi/gestion-suivi.component';
import { GestionOrdonnanceComponent } from './home/doctor-management/gestion-ordonnance/gestion-ordonnance.component';
import { UpdatereclamationComponent } from './home/updatereclamation/updatereclamation.component';
import { GetClaimByPatientManagementComponent } from './home/patient-management/get-claim-by-patient-management/get-claim-by-patient-management.component';
import { AjouterreclamationComponent } from './home/ajouterreclamation/ajouterreclamation.component';
import { ReclamationManagementComponent } from './home/patient-management/reclamation-management/reclamation-management.component';
import { DoctorManagementComponent } from './home/doctor-management/doctor-management.component';
import { PatientAppoitementComponent } from './home/patient-appoitement/patient-appoitement.component';
import { PatientManagementComponent } from './home/patient-management/patient-management.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './user/signin/signin.component';
import { SignupComponent } from './user/signup/signup.component';
import { AuthguardGuard } from './authguard/authguard.guard';
import { UserManagementComponent } from './home/user-management/user-management.component';
import { UpdateUserComponent } from './home/update-user/update-user.component';
import { GetClaimsManagementComponent } from './home/patient-management/get-claims-management/get-claims-management.component';


export const routes: Routes = [
  {
    path: "dashboard", component: HomeComponent, canActivate: [AuthguardGuard], children: [
      { path: "user-management", component: UserManagementComponent },
      { path: "user-management/updateUser/:id", component: UpdateUserComponent },
      { path: "patient-management", component: PatientManagementComponent },
      { path: "patient-management/appointement/:id", component: PatientAppoitementComponent },
      { path: "doctor-management", component: DoctorManagementComponent },
      { path: "doctor-management/gestion-ordonnace", component: GestionOrdonnanceComponent },
      { path: "doctor-management/gestion-suivi", component: GestionSuiviComponent },
      { path: "doctor-management/gestion-suivi/addsuivi", component: AddSuiviComponent },
      { path: "updatereclamation/:id", component: UpdatereclamationComponent },
      { path: "patient-management/reclamation-management", component: ReclamationManagementComponent },
      { path: "patient-management/get-claims-management", component: GetClaimsManagementComponent },
      { path: "patient-management/get-claim-by-patient-management/:id", component: GetClaimByPatientManagementComponent },
      { path: "patient-management/reclamation-management/reclamation/:id", component: AjouterreclamationComponent }

      
    ],
  },
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
