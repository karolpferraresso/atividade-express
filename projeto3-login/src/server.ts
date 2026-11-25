import express from 'express';
import loginRoutes from './routes/loginRoutes';

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(loginRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Projeto 3 rodando em http://localhost:${PORT}`);
});