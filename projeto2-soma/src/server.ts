import express from 'express';
import somaRoutes from './routes/somaRoutes';

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(somaRoutes);

app.listen(PORT, () => {
    console.log(`Servidor Projeto 2 rodando em http://localhost:${PORT}`);
});