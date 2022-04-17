import { Component } from '@angular/core';
import { FlaskService } from './services/flask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flask';
  data: any;
  chamath = 'Chamaths';

  constructor(private flaskService: FlaskService) {
    this.showData();
  }

  handleButtonClick() {
    console.log('Button clicked');
  }

  showData() {
    this.flaskService.getFlaskData().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }
}
