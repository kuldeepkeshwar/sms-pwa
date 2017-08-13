import express from 'express';
import api from './routes';

const app = express();
app.use('/api/v1/', api);
app.listen(3000, () => console.log('running on localhost:3000'));
