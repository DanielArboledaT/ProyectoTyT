import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthService } from '../common/services/auth.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule { }
export { LoginComponent };
