import axios from "axios";
const url = "http://b.dormi.co.il/";

export const PostToServer = async (ruter, value) => {
  let myPromise = new Promise((resolve, reject) => {
    axios.post(`http://b.dormi.co.il/login/`, value).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return myPromise;
};
