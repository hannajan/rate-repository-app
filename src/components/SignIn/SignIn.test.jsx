import { SignInContainer } from '.';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

describe('SignIn', () => {
  describe('SignInForm', () => {

    it('calls onSubmit function exactly once with correct arguments', async () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(<SignInContainer onSubmit={onSubmit} />)

      fireEvent.changeText(getByPlaceholderText('Username'), 'teppo');
      fireEvent.changeText(getByPlaceholderText('Password'), 'secret');
      fireEvent.press(getByText('Sign in'));

      await waitFor(() => {
        
        expect(onSubmit).toHaveBeenCalledTimes(1);
      
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'teppo',
          password: 'secret',
        });
      });
    });
  });
});