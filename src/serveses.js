import axios from "axios";
const url = "http://b.dormi.co.il/users";

export const PostToServer = async (ruter, valeu) => {
  let myPromis = new Promise((resolve, reject) => {
    axios.post(`http://b.dormi.co.il/boaz/post-read`, valeu).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return myPromis;
};

export const GettfromServer = async (ruter) => {
  let myPromis = new Promise((resolve, reject) => {
    axios.get(`http://b.dormi.co.il/boaz/post`).then(
      (res) => {
        resolve(res.data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return myPromis;
};
// GettfromServer("");
