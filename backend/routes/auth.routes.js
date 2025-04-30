import express from 'express';
const router = express.Router();
import { signup, signin, google } from '../controller/auth.controller.js';

router.post('/signup',signup);
router.post('/login', signin);
router.post('/google', google);

export default router;
