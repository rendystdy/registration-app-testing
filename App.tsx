/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {ScrollView, StyleSheet, Text, useColorScheme, View} from 'react-native';
import Colors from './src/Colors';
import {Button, Input, InputDropDown} from './src/components';
import {
  getCity,
  getDistrict,
  getProvince,
} from './src/helpers/getRegionOfIndonesia';

interface IlistOfProvince {
  id: string;
  name: string;
}

interface IlistOfCity {
  id: string;
  province_id: string;
  name: string;
}

interface IlistOfDistricts {
  id: string;
  regency_id: string;
  name: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [listOfProvince, setListOfProvince] = useState<IlistOfProvince[]>([]);
  const [listOfCity, setListOfCity] = useState<IlistOfCity[]>([]);
  const [listOfDistricts, setListOfDistricts] = useState<IlistOfDistricts[]>(
    [],
  );
  const [fullName, setFullName] = useState<string>('');
  const [province, setProvince] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);

  useEffect(() => {
    getListOfProvince();
  }, []);

  const getListOfProvince = async () => {
    const response: any = await getProvince();
    setListOfProvince(response);
  };

  const getListOfCity = async (id: string) => {
    const response: any = await getCity(id);
    setListOfCity(response);
  };

  const getListOfDistricts = async (id: string) => {
    const response: any = await getDistrict(id);
    setListOfDistricts(response);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.background : Colors.lighter,
  };

  const handleRegister = async () => {
    try {
      const targetPhone = '085881272535';
      const message = 'test dari mobile';
      const token = 'wq#L!gYa2dVeyZ3BEKQh';
      const data = new FormData();

      data.append('target', targetPhone);
      data.append('message', message);

      console.log('data', data);

      const response = await fetch('https://api.fonnte.com/send', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token,
        },
        body: data, // body data type must match "Content-Type" header
      });
      return await response.json(); // parses JSON response into native JavaScript objects
    } catch (error) {
      console.log('err', error);
    }
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <ScrollView>
        <Text style={styles.title}>React Native</Text>
        <Text style={[styles.title, styles.gapBototm]}>
          User Registration Form
        </Text>
        <Text style={[styles.subtitle, styles.gapBototm]}>
          GoAPI / Emsifa Location API
        </Text>
        <Input
          value={fullName}
          onChangeText={setFullName}
          placeholder="Nama Lengkap"
          containerStyle={styles.gapBototm}
        />
        <InputDropDown
          placeholder="Provinsi"
          data={listOfProvince}
          value={province}
          setValue={(val, id) => {
            setProvince(val);
            getListOfCity(id);
          }}
        />
        <InputDropDown
          placeholder="Kota"
          data={listOfCity}
          value={city}
          setValue={(val, id) => {
            setCity(val);
            getListOfDistricts(id);
          }}
        />
        <InputDropDown
          data={listOfDistricts}
          placeholder="Kecamatan"
          value={district}
          setValue={val => setDistrict(val)}
        />
        <Button
          title="Register"
          onPress={handleRegister}
          style={{marginTop: 48}}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: Colors.background,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '500',
  },
  gapBototm: {
    marginBottom: 20,
  },
  subtitle: {
    color: Colors.dark,
    fontSize: 13,
    fontWeight: '400',
  },
});

export default App;
