import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get()
  sayHello() {
    return 'Welcome to my Movie API Home';
  }
}
