import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NumberOneComponent } from "./number-one/number-one.component";
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "001", component: NumberOneComponent },
  { path: "**", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, NumberOneComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
