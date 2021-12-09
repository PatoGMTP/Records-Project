import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {

  name: string = "";

  comment: string = "";
  
  picture: string = "";
  picture_options: [string, string][] = [
    ["Eagle", "https://www.pngall.com/wp-content/uploads/2016/03/Eagle-PNG-5.png"],
    ["Dog", "https://www.pngmart.com/files/16/Dog-Face-PNG-Free-Download.png"],
    ["Cat", "https://clipart.info/images/ccovers/1522852548cat-png-2.png"],
  ];

  color: string = "white";
  color_options: [string, string][] = [
    ["Red", "IndianRed"],
    ["Blue-ish Green", "DarkTurquoise"],
    ["White-ish", "Linen"],
  ];

  theme: string = "normal";
  theme_options: [string, string][] = [["Fancy", "fancy"], ["Bold", "bold"]];

  font_style: string = "normal";
  font_variant: string = "normal";

  font_options = {'font-variant': this.font_variant, 'font-style': this.font_style}

  tag_list: {name: string, comment: string, picture: string, color: string, font_options: Object}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void
  {
    this.tag_list.unshift({
      name: this.name,
      comment: this.comment,
      picture: this.picture,
      color: this.color,
      font_options: {...this.font_options}
    });
    form.resetForm();
    this.color = "white";
    this.font_style = "normal";
    this.font_variant = "normal";
    this.font_options = {'font-variant': this.font_variant, 'font-style': this.font_style}
  }

  setTheme(): void
  {
    switch (this.theme)
    {
      case "fancy":
        this.font_style = "oblique";
        this.font_variant = "normal";
        break
      case "bold":
        this.font_style = "normal";
        this.font_variant = "small-caps";
        break
      default:
        this.font_style = "normal";
        this.font_variant = "normal";
    }

    this.font_options = {'font-variant': this.font_variant, 'font-style': this.font_style}
  }

}
