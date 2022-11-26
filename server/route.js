import express from 'express';
import { addUser } from './dbconnect.js';

const router = express.Router();

router.post('/add', addUser);

export default router;