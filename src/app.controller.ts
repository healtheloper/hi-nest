import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  sayHello() {
    return 'Welcome to my Movie API Home';
  }
}
