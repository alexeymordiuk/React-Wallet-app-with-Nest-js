import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUser, loginUser, checkIsLoggedIn } from '../../api/user.api';
import { setUser } from '../slices/user-slice/userSlice';

interface Credentials {
  email: string;
  password: string;
}

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: Credentials;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: Credentials;
}

export const loginSuccess = (user: Credentials): LoginSuccessAction => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const registerSuccess = (user: Credentials): RegisterSuccessAction => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (credentials: Credentials, { dispatch }) => {
    const user = await createUser(credentials.email, credentials.password);
    dispatch(setUser(user));
    return user;
  }
);

export const loginUserAction = createAsyncThunk(
  'user/loginUser',
  async (credentials: Credentials, { dispatch }) => {
    const user = await loginUser(credentials.email, credentials.password);
    dispatch(setUser(user));
    return user;
  }
);

export const getUserById = createAsyncThunk(
  'user/getUserById',
  async (userId: string) => {
    const user = await checkIsLoggedIn(userId);
    return user;
  }
);

