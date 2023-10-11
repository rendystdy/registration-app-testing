import {IlistOfProvince} from '../components/InputDropdown';

const getProvince = async () => {
  const response: IlistOfProvince = await new Promise((resolve, reject) => {
    fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then(res => res.json())
      .then(province => {
        resolve(province);
      })
      .catch(err => reject(err));
  });

  return response;
};

const getCity = async (id: string) => {
  const response: IlistOfProvince = await new Promise((resolve, reject) => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`,
    )
      .then(res => res.json())
      .then(city => {
        resolve(city);
      })
      .catch(err => reject(err));
  });

  return response;
};

const getDistrict = async (id: string) => {
  const response: IlistOfProvince = await new Promise((resolve, reject) => {
    fetch(
      `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`,
    )
      .then(res => res.json())
      .then(district => {
        resolve(district);
      })
      .catch(err => reject(err));
  });

  return response;
};

export {getProvince, getCity, getDistrict};
