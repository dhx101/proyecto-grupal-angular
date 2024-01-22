import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { AddGamePageComponent } from './pages/add-game-page/add-game-page.component';

export const routes: Routes = [
    {
        path:"",
        component:HomePageComponent
    },
    {
        path:"juegos",
        component:ContentPageComponent
    },
    {
        path:"contact",
        component:ContactPageComponent
    },

    {
        path:"contact",
        component:ContactPageComponent
    },
    {
        path:"gestion",
        component:AddGamePageComponent
    },

];
