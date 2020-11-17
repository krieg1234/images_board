import axios from 'axios';

const getImages = async () => {
  const { data } = await axios.get('https://boiling-refuge-66454.herokuapp.com/images');
  return data;
};

export default getImages;