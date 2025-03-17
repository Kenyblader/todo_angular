import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports:[FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router,private userService:UserService) {}

  onSubmit() {
    this.userService.login(this.username,this.password).subscribe({
      next:response=>{
        if(response.isLog)
          this.router.navigate(['/projects',response.user.id]);
        else
          alert('Identifiants incorrects');
      }
    })
  }
}
