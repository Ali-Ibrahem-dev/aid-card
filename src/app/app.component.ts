import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import domtoimage from 'dom-to-image';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aid-card';
  showImage = false;
  companyName = new FormControl('', Validators.required);
  submitForm() {
    if (this.companyName.valid) {
      this.showImage = true;
    }
  }
  downloadImg() {
    const myImg = document.getElementById('aid-img');
    if (myImg)
      domtoimage.toJpeg(myImg, { quality: 1 }).then( (dataUrl) => {
        var link = document.createElement('a');
        link.download = `${this.companyName.value?.toString().trim()}.jpeg`;
        link.href = dataUrl;
        link.click();
      });
  }
}
