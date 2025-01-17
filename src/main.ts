import { NestFactory } from '@nestjs/core'; // criar aplicação
import { AppModule } from './app.module'; // onde configuramos os modulos e funcionalidades principais
import { ValidationPipe } from '@nestjs/common'; // validar os dados que chegam no app

// funcao assincrona que nao deixa travar o restante do código
async function bootstrap() {
  
  //cria a aplicação
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '-03:00'; // ajusta o fuso horario

//valida automaticamente os dados que entram nas requisições
  app.useGlobalPipes(new ValidationPipe());

// permite que o app seja acessado por outras origens 
  app.enableCors()

// servidor iniciado
  await app.listen(process.env.PORT ?? 4000);
}
//chamando a funcao para iniciar o app
bootstrap();
