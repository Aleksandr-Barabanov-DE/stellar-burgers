import userSliceReducer, {
  initialState,
  register,
  login,
  apiGetUser,
  updateUser,
  logout
} from '../userSlice';

const mockUser = {
  success: true,
  user: {
    email: 'alex@gmail.com',
    name: 'Alex'
  }
};

const mockUpdateUser = {
  email: 'alex@gmail.com',
  name: 'Alexander'
};

const mockAuthResponse = {
  success: true,
  refreshToken: 'testRefreshToken',
  accessToken: 'testAccessToken',
  user: {
    email: 'alex@gmail.com',
    name: 'Alex'
  }
};

const mockLoginData = {
  email: 'alex@gmail.com',
  password: 'password123'
};

const mockRegisterData = {
  email: 'alex@gmail.com',
  name: 'Alex',
  password: 'password123'
};

describe('userSlice async actions tests', () => {
  test('login fulfilled', () => {
    const newState = userSliceReducer(
      initialState,
      login.fulfilled(mockAuthResponse, '', mockLoginData)
    );
    const { user, isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(true);
    expect(user).toEqual(mockAuthResponse.user);
    expect(error).toBe('');
    expect(isLoading).toBe(false);
  });

  test('login pending', () => {
    const newState = userSliceReducer(
      initialState,
      login.pending('', mockLoginData)
    );
    const { isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('');
    expect(isLoading).toBe(true);
  });

  test('login rejected', () => {
    const newState = userSliceReducer(
      initialState,
      login.rejected({ name: '', message: 'test error' }, '', mockLoginData)
    );
    const { error, isAuthChecked, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('test error');
    expect(isLoading).toBe(false);
  });

  test('register fulfilled', () => {
    const newState = userSliceReducer(
      initialState,
      register.fulfilled(mockAuthResponse, '', mockRegisterData)
    );
    const { user, isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(true);
    expect(user).toEqual(mockAuthResponse.user);
    expect(error).toBe('');
    expect(isLoading).toBe(false);
  });

  test('register pending', () => {
    const newState = userSliceReducer(
      initialState,
      register.pending('', mockRegisterData)
    );
    const { isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('');
    expect(isLoading).toBe(true);
  });

  test('register rejected', () => {
    const newState = userSliceReducer(
      initialState,
      register.rejected(
        { name: '', message: 'test error' },
        '',
        mockRegisterData
      )
    );
    const { error, isAuthChecked, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('test error');
    expect(isLoading).toBe(false);
  });

  test('logout pending', () => {
    const newState = userSliceReducer(initialState, logout.pending(''));
    const { isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('');
    expect(isLoading).toBe(true);
  });

  test('logout rejected', () => {
    const newState = userSliceReducer(
      initialState,
      logout.rejected({ name: '', message: 'test error' }, '')
    );
    const { error, isAuthChecked, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('test error');
    expect(isLoading).toBe(false);
  });

  test('getUser fulfilled', () => {
    const newState = userSliceReducer(
      initialState,
      apiGetUser.fulfilled(mockUser, '')
    );
    const { user, isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(true);
    expect(user).toEqual(mockUser.user);
    expect(error).toBe('');
    expect(isLoading).toBe(false);
  });

  test('getUser pending', () => {
    const newState = userSliceReducer(initialState, apiGetUser.pending(''));
    const { isAuthChecked, error, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(error).toBe('');
    expect(isLoading).toBe(true);
  });

  test('getUser rejected', () => {
    const newState = userSliceReducer(
      initialState,
      apiGetUser.rejected({ name: '', message: 'test error' }, '')
    );
    const { error, isAuthChecked, user, isLoading } = newState;

    expect(isAuthChecked).toBe(false);
    expect(user).toEqual({ email: '', name: '' });
    expect(error).toBe('test error');
    expect(isLoading).toBe(false);
  });

  test('updateUser fulfilled', () => {
    const newState = userSliceReducer(
      initialState,
      updateUser.fulfilled(
        { ...mockUser, user: mockUpdateUser },
        '',
        mockUpdateUser
      )
    );
    const { user, isLoading } = newState;

    expect(isLoading).toBe(false);
    expect(user).toEqual(mockUpdateUser);
  });

  test('updateUser pending', () => {
    const newState = userSliceReducer(
      initialState,
      updateUser.pending('', mockUpdateUser)
    );
    const { isLoading } = newState;

    expect(isLoading).toBe(true);
  });

  test('updateUser rejected', () => {
    const newState = userSliceReducer(
      initialState,
      updateUser.rejected(
        { name: '', message: 'test error' },
        '',
        mockUpdateUser
      )
    );
    const { error, isLoading } = newState;

    expect(isLoading).toBe(false);
    expect(error).toBe('test error');
  });
});
