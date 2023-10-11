import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Colors from '../Colors';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
  style: ViewStyle;
  onPress: () => void;
}

const Button: React.FC<IButtonProps> = ({
  title,
  style,
  onPress,
  ...restProps
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      onPress={onPress}
      {...restProps}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: Colors.white,
    letterSpacing: 1,
  },
});
