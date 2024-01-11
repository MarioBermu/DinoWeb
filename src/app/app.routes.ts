
import { DinocromosComponent } from './dinocromos/dinocromos.component';
import { RouterModule,Routes } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { JuegodinoComponent } from './juegodino/juegodino.component';
import { NgModule } from '@angular/core';

import { PagejuegoComponent } from './pagejuego/pagejuego.component';
import { PageNosotrosComponent } from './page-nosotros/page-nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PreguntaComponent } from './home/test/pregunta/pregunta.component';
import { WelcomeComponent } from './home/test/welcome/welcome.component';
import { ForoComponent } from './home/foro/foro.component';
import { HoraDelFinComponent } from './home/hora-del-fin/hora-del-fin.component';
import { BarraDeNavegacionComponent } from './barra-de-navegacion/barra-de-navegacion.component';


export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'dinocromos', component: DinocromosComponent},
  { path: 'juegodino', component: JuegodinoComponent},
  { path: 'pagejuego', component: PagejuegoComponent},
  { path: 'pageNosotros', component: PageNosotrosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'pregunta', component: PreguntaComponent},
  { path: 'welcome', component: WelcomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})

export class AppRoutingModule { }



