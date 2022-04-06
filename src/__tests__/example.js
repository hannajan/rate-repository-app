import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
    <View>
      <TextInput
        value={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
      />
    </View>
    <View>
      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
      />
    </View>
    <View>
      <Pressable onPress={handleSubmit} testID="submitButton">
        <Text>Submit</Text>
      </Pressable>
    </View>
  </View>
  );
};

describe('Example', () => {
  it('works', () => {
    expect(1).toBe(1);
  });
});

describe('Greeting', () => {
  it('renders a greeting message based on the name prop', () => {
    const { debug, getByText } = render(<Greeting name="Kalle" />);

    debug();

    expect(getByText('Hello Kalle!')).toBeDefined();
  });
});

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByText } = render(<Form onSubmit={onSubmit} />);

    fireEvent.changeText(getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(getByPlaceholderText('Password'), 'password');
    fireEvent.press(getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    });
  });
});