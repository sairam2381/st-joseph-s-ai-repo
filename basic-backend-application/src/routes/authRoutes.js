import express from 'express';
import { signUp, signIn, getMe, forgotPassword } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/me', protect, getMe);
router.post('/forgot-password', forgotPassword);

export default router;
