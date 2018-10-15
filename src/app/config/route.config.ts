import { Routes } from "@angular/router";
import { IntroPageComponent } from "../pages/intro/intro.component";

export const ROUTE: Routes = [
    {
        path: "intro",
        component: IntroPageComponent
    },
    {
        // redirect the home page to intro
        path: "",
        redirectTo: "intro",
        pathMatch: "full"
    },
    {
        // redirect all unknown paths the home page to intro
        // could be a 404 page, if we wrote the html for it :)
        path: "**",
        redirectTo: "intro",
        pathMatch: "full"
    }
];
