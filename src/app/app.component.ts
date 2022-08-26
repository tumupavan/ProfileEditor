import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProfileEditor';

  action: string = '';

  displayEdit: boolean = false;

  profileForm: NgForm | undefined;

  toggleEdit(): void {
    this.displayEdit = !this.displayEdit;
    if(!this.displayEdit)
      this.action = "Update User Information"
    if(this.displayEdit)
      this.action = "User Information"
  }

  saveChanges(form: NgForm): void {
    console.log(this.profileForm?.value)
  }

  user: User = {
    name: "Dave",
    age: 34,
    favoriteColor: 'black',
    interests: 'cycling',
    additionalInfo: 'please fill'
  }
}
