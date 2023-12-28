
import { DinocromosComponent } from './dinocromos/dinocromos.component';
import { RouterModule,Routes } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { HomeComponent } from './home/home.component';
import { JuegodinoComponent } from './juegodino/juegodino.component';
import { NgModule } from '@angular/core';
import { CargarScriptsService } from './cargar-scripts.service';
import { PagejuegoComponent } from './pagejuego/pagejuego.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'dinocromos', component: DinocromosComponent},
  { path: 'juegodino', component: JuegodinoComponent},
  { path: 'pagejuego', component: PagejuegoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CargarScriptsService],
})

export class AppRoutingModule { }



