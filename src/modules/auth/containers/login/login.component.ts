import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { LoginService } from '@app/services/login.service';
import {Router} from '@angular/router'
import { AlertasService } from '@app/services/alertas.service';
@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    constructor(private loginServices:LoginService,private router: Router,private alerta:AlertasService) {
        this.formLogin = new FormGroup({
            formLogin_email: new FormControl('', [Validators.required]),
            formLogin_password: new FormControl('', [Validators.required]),
          });
    }
    formLogin: FormGroup;
    get formLogin_Email() {
        return this.formLogin.get("formLogin_email");
      }
      get formLogin_Password() {
        return this.formLogin.get("formLogin_password");
      }
    ngOnInit() {
    }

    async login(){
        var respuesta:any;
        respuesta =  await this.loginServices.login_(this.formLogin_Email?.value,this.formLogin_Password?.value);
        if(respuesta['status'] == 200){
          localStorage.setItem( 'Nombre',respuesta['session']['UserName']);
          localStorage.setItem( 'Apellido', respuesta['session']['Lastname']);
          localStorage.setItem( 'Email', respuesta['session']['Email']);
          localStorage.setItem( 'UserID',respuesta['session']['UserID']);
          this.router.navigateByUrl('/dashboard');
          this.alerta.showSuccess("","Bienvenido "+respuesta['session']['UserName']);
        }
      }
}
