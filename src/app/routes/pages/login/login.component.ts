import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { AuthService } from '../../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
    email: string;
    constructor(private _router: Router, public settings: SettingsService, public auth: AuthService, fb: FormBuilder) {



    }

    submitForm() {
 

        this.auth.login(this.email, null);
        if (this.email.startsWith("t")) {
            this._router.navigate(['extras/timeline']);
        } else if (this.email.startsWith("d")) {
            this._router.navigate(['blog/dirhome']);


        } else if (this.email.startsWith("s")) {
            this._router.navigate(['extras/timeline']);
        } else if (this.email.startsWith("a")) {
            this._router.navigate(['extras/timeline']);


        }
        console.log(this.email);

    }

    ngOnInit() {

    }

}
