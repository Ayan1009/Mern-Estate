import express from 'express';
const router = express.Router();
import { signup, signin } from '../controller/auth.controller.js';

router.post('/signup',signup);
router.post('/login', signin);

export default router;
