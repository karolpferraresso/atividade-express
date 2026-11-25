import express from 'express';
import mensagemRoutes from './routes/mensagemRoutes';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(mensagemRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Projeto 1 rodando em http://localhost:${PORT}`);
});