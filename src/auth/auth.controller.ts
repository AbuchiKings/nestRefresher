import { Controller, Post } from "@nestjs/common";
import AuthService from "./auth.service";



@Controller('api/v1/auth')
class AuthController {
    constructor(private readonly authservice: AuthService) { }

    @Post('signup')
    signup() {
        return this.authservice.signup()
    }

    @Post('signin')
    signin() {
        return this.authservice.signin()
    }
}

export default AuthController;