import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NumberOneComponent } from "./number-one/number-one.component";
import { NumberTwoComponent } from "./number-two/number-two.component";
const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "dailyUI:001", component: NumberOneComponent },
  { path: "dailyUI:002", component: NumberTwoComponent },
  { path: "**", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NumberOneComponent,
    NumberTwoComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
