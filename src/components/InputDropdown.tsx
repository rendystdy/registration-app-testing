import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import Colors from '../Colors';

interface IDropDownProps {
  value: string | null;
  setValue: (val: string, id: string) => void;
  placeholder: string;
  data: IlistOfProvince[];
}

export interface IlistOfProvince {
  id: string;
  name: string;
}

const InputDropdown: React.FC<IDropDownProps> = ({
  value,
  setValue,
  placeholder,
  data,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        maxHeight={300}
        labelField="name"
        valueField="name"
        placeholder={!isFocus ? placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.name, item.id);
          setIsFocus(false);
        }}
      />
    </View>
  );
};

export default InputDropdown;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: 5,
    height: 59,
    marginBottom: 20,
    // padding: 20,
  },
  dropdown: {
    height: 59,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: Colors.white,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: Colors.white,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
