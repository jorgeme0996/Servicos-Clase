import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'consulta', loadChildren: './pages/consulta/consulta.module#ConsultaPageModule' },
  { path: 'ngfor', loadChildren: './pages/ngfor/ngfor.module#NgforPageModule' },
  { path: 'especie', loadChildren: './pages/especie/especie.module#EspeciePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
