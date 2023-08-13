
import { Injectable } from '@nestjs/common';

@Injectable()
class AuthService {

    signup() {
        return { status: 'success', message: 'Nestjs is overrated', result: null }
    }

    signin() {
        return 'Nestjs is overrated'
    }
}

export default AuthService;