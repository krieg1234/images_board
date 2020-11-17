import axios from 'axios';

const getModalImage = async (id) => {
  const { data } = await axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
  return data;
};

export default getModalImage;