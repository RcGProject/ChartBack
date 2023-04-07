// Importa o módulo dotenv para carregar variáveis de ambiente
import dotenv from 'dotenv';
import session from 'express-session';
import mongoose from 'mongoose';
import MongoStore from 'connect-mongo';

dotenv.config();

// Configura as opções da sessão do usuário
const sessionOptions = session({
  secret: 'secret',
  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

// Conecta ao banco de dados MongoDB
const connectBD = mongoose.connect(process.env.CONNECTIONSTRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
export { connectBD, sessionOptions };
