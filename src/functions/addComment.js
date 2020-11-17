import axios from 'axios';

const addComment = async (imgId, userName, comment) => {
  const requestBody = {
    comment,
    name: userName,
    date: Date.parse(String(new Date())),
  }
  const resp = await axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imgId}/comments`, requestBody);
  return resp;
};

export default addComment;