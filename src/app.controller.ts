import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public, Roles, Unprotected } from 'nest-keycloak-connect';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/public')
  @Unprotected()
  getpublic(): string {
    return `${this.appService.getHello()} from public`;
  }
@Get('/user')
  @Roles({ roles: ['user'] })
  getUser(): string {
    return `${this.appService.getHello()} from user`;
  }
@Get('/admin')
  @Roles({ roles: ['admin'] })
  getAdmin(): string {
    return `${this.appService.getHello()} from admin`;
  }
@Get('/all')
   @Public()
   getAll(): string {
    return `${this.appService.getHello()} from all`;
  }


}


