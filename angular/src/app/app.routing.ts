import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// import { HomeComponent } from "./home/home.component"
import { Zapatillas } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'zapatillas', component: Zapatillas},
    { path: 'videojuego', component: VideojuegoComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'cursos/:nombre', component: CursosComponent},
    { path: 'cursos/:nombre/:followers', component: CursosComponent},
    { path: '**', component: VideojuegoComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)