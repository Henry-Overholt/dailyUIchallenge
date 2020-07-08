import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  challenges: any[] = [
    {
      challengeNum: "001",
      prompt:
        "Create a sign up page, modal, form, or app screen related to signing up for something. It could be for a volunteer event, contest registration, a giveaway, or anything you can image.",
      show: false,
      path: "001",
    },
    {
      challengeNum: "002",
      prompt: "This is just a test for number 2",
      show: false,
      path: "002",
    },
  ];
  constructor() {}

  ngOnInit() {}
  showPrompt(i: number): void {
    if (this.challenges[i].show === true) {
      this.challenges[i].show = false;
    } else {
      this.challenges.forEach((obj) => {
        obj.show = false;
      });

      this.challenges[i].show = !this.challenges[i].show;
    }
  }
}
