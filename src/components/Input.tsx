import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../Colors';

interface IInputProps extends TextInputProps {
  value: string;
  containerStyle?: ViewStyle;
}

const Input: React.FC<IInputProps> = ({
  value,
  containerStyle,
  ...restProps
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        value={value}
        style={styles.input}
        placeholderTextColor={Colors.white}
        {...restProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
    height: 59,
  },
  input: {
    height: 59,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 16,
    color: Colors.white,
  },
});
