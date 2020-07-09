import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-number-one",
  templateUrl: "./number-one.component.html",
  styleUrls: ["./number-one.component.css"],
})
export class NumberOneComponent implements OnInit {
  hide: boolean = false;
  user: any = { firstName: "Han Solo" };
  confrimation: boolean = false;
  constructor() {}

  ngOnInit() {}
  handleForm(form: NgForm) {
    this.user = form;
    console.log(`Welcome to the Rebellion ${this.user.firstName}!`);
    this.confrimation = true;
    setTimeout(() => {
      console.log(`We'll be in contact soon!`);
    }, 3000);
  }
  closeWindow() {
    document.querySelector("form").reset();
    this.confrimation = false;
  }
  hideAlliance() {
    this.hide = !this.hide;
    if (this.hide === false) {
      document.getElementById("wrapper").style.background =
        'url("./../../assets/001/rebelPoster.jpg")';
      document.getElementById("submit").style.background =
        "linear-gradient(to right, green, blue)";
      document.getElementById("title").innerText =
        "The Rebel Alliance Needs You!";
      document.getElementById("description").innerText =
        "Sign Up today to fight for your freedom! Keep the Empire's Eyes Off You, click the Jedi Order Symbol at the bottom to disguise this form! The information still gets to us but everyone thinks you are signing up for the Imperial Academy, to learn how to miss every single shot.";
    } else {
      document.getElementById("wrapper").style.background =
        'url("./../../assets/001/empirePoster.jpg")';
      document.getElementById("submit").style.background =
        "linear-gradient(to right, black, red)";
      document.getElementById("title").innerText =
        "Enroll at the Greatest Academy in the Galaxy Today!";
      document.getElementById("description").innerText =
        "Enroll today to study with the best. Fulfil your destiny and join the brave Imperial Army after graduation! Stand with the Best and Enroll Today!";
    }
    document.getElementById("wrapper").style.backgroundSize = "200px";
    document.getElementById("wrapper").style.backgroundPosition = "center";
  }
}
