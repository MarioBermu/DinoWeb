
import { DinocromosComponent } from './dinocromos/dinocromos.component';
import { RouterModule,Routes } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { JuegodinoComponent } from './juegodino/juegodino.component';
import { NgModule } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { PagejuegoComponent } from './pagejuego/pagejuego.component';
import { PageNosotrosComponent } from './page-nosotros/page-nosotros.component';

export const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'Home' },
  { path: 'home', component: HomeComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'dinocromos', component: DinocromosComponent},
  { path: 'juegodino', component: JuegodinoComponent},
  { path: 'pagejuego', component: PagejuegoComponent},
  { path: 'pageNosotros', component: PageNosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CargarScriptsService],
})

export class AppRoutingModule { }



