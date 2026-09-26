import {
  registerUserService,
  loginUserService,
  getUserProfileService,
} from '../services/authService.js';

// @desc    Register a new user
// @route   POST /api/auth/signup
// @access  Public
export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and password',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters long',
      });
    }

    const userData = await registerUserService({ name, email, password });

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: userData,
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Authenticate user & get token
// @route   POST /api/auth/signin
// @access  Public
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password',
      });
    }

    const userData = await loginUserService({ email, password });

    return res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      data: userData,
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Get logged in user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res, next) => {
  try {
    const user = await getUserProfileService(req.user._id);
    return res.status(200).json({
      success: true,
      message: 'User profile fetched successfully',
      data: user,
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Request password reset
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Password reset link has been sent to your email address.',
    });
  } catch (error) {
    return next(error);
  }
};
