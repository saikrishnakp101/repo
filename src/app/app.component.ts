import { Component } from '@angular/core';
import { SchoolService } from './services/school.service'
import { HomeService } from './services/home/home.service'
import { AboutService } from './services/about/about.service'
import { ContactService} from './services/contact/contact.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SchoolService, HomeService , AboutService, ContactService]
})
export class AppComponent {
  title = 'app works!';
}
