import React, { useState, Component, useEffect } from "react";

import { Link } from "react-router-dom";

import {
  Form,
  Input,
  Button,
  Modal,
  Checkbox,
  Radio,
  Space,
  Select,
  Upload,
} from "antd";
import { FormContener } from "../styelscomponents/NewRequest";
import { FiArrowRight } from "react-icons/fi";
import { BsCloudUpload } from "react-icons/bs";
import { PoweroffOutlined } from "@ant-design/icons";
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
const Nwerequest = (props) => {
  document.body.style.backgroundColor = "#3286F9";
  const { Option } = Select;
  const { TextArea } = Input;
  const Temmembertask = props.Temmembertask;
  const [uplodeimagescreen, setuplodeimagescreen] = useState(false);

  const [typeofreq, settypeofreq] = useState();
  const [typs, settyps] = useState(true);
  const listtips = [
    { type: "חשמל", id: 123 },
    { type: "אינסטלציה", id: 456 },
  ];
  const problomtypearry = [
    { type: "חשמל", id: 123 },
    { type: "אינסטלציה", id: 456 },
  ];
  const locationarry = [
    { type: "חדר אוכל", id: 123 },
    { type: "פנימייה", id: 456 },
  ];

  const onFinish = (values) => {
    enterLoading(2);

    setTimeout(() => {
      setuplodeimagescreen(true);
    }, 3000);

    console.log("Success:", values);
  };

  const chosentyp = (value) => {
    settyps(false);
    settypeofreq({ problem_id: value.type });
  };

  const [loadings, setloadings] = useState([]);
  const enterLoading = (index) => {
    setloadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return newLoadings;
    });
  };

  // const handleChange = async (e) => {
  //   let myPromise = await new Promise((resolve, reject) => {
  //     resolve({ file: e.target.files[0] });
  //   });
  //   onFormSubmit(myPromise);
  // };

  const onFormSubmit = (value) => {
    // e.preventDefault();

    console.log("imag", value);
    const formData = new FormData();
    formData.append("file", value.file);
    // formData.append("phonenumber", phonenumber);
    // formData.append("s3path", `${phonenumber}/`);
  };
  const sendimage = () => {
    console.log("state", uplodeimage);
  };
  const [uplodeimage, setuplodeimage] = useState({
    previewVisible: false,
    previewImage: "",
    previewTitle: "",
  });

  const handleCancel = () => setuplodeimage({ previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setuplodeimage({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const handleChange = ({ fileList }) => setuplodeimage({ fileList });

  const { previewVisible, previewImage, fileList, previewTitle } = uplodeimage;
  const uploadButton = (
    <div>
      <BsCloudUpload />

      <div className="uplodeimage">בחר קובץ</div>
    </div>
  );

  return (
    <div>
      {/* <div> */}

      <div>
        {typs ? (
          <div>
            <h1>יש'ך בעיה?</h1>
            <p>תעדכן אותנו במה מדובר וכבר נתחיל את הטיפול</p>

            {listtips.map((el) => {
              return (
                <div
                  onClick={() => {
                    chosentyp(el);
                  }}
                >
                  {el.type}
                </div>
              );
            })}
          </div>
        ) : (
          <FormContener>
            <div className="avatar"></div>
            {!uplodeimagescreen ? (
              <Form name="basic" onFinish={onFinish}>
                <div className="goback">
                  <FiArrowRight
                    onClick={() => {
                      settyps(true);
                    }}
                  />
                </div>
                <Form.Item
                  label="סוג הבעיה"
                  name="problom"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select showSearch>
                    {problomtypearry.map((el) => {
                      return (
                        <Option value={[el.type, el.id]}>{el.type}</Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="location"
                  label="בחר מתחם"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select showSearch>
                    {locationarry.map((el) => {
                      return (
                        <Option value={[el.type, el.id]}>{el.type}</Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="text"
                  label="תיאור הבעיה"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  name="radio-group"
                  label="דחיפות"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Radio.Group>
                    <Space direction="vertical">
                      <Radio className="Radio1" value={1}>
                        גבוה
                      </Radio>

                      <Radio className="Radio2" value={2}>
                        בינוני
                      </Radio>

                      <Radio className="Radio3" value={3}>
                        נמוך
                      </Radio>
                    </Space>
                  </Radio.Group>
                </Form.Item>
                {Temmembertask ? (
                  <div className="frequency">
                    <Form.Item
                      name="frequency"
                      label="תדירות"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select showSearch>
                        {locationarry.map((el) => {
                          return (
                            <Option value={[el.type, el.id]}>{el.type}</Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </div>
                ) : null}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loadings[2]}
                  >
                    {Temmembertask ? "שלח פניה" : "צור מטלה"}
                  </Button>
                </Form.Item>
              </Form>
            ) : (
              <div className="textbloon">
                <p>
                  תודה - רשמנו את פנייתך. אם תרצו, תוכלו לצרף כעת תמונה
                  רלוונטית.
                </p>
                <Link to="/ListOfreq">או עברו לרשימת הפניות</Link>
                <div className="avaterpopup"></div>
                <div className="uploadimage">
                  <Upload
                    listType="picture-card"
                    // fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {uploadButton}
                  </Upload>
                  {uplodeimage?.fileList?.length >= 1 ? (
                    <button onClick={sendimage}>שלח</button>
                  ) : null}
                </div>
                <Modal
                  visible={previewVisible}
                  title={previewTitle}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <img
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </div>
            )}
          </FormContener>
        )}
      </div>
    </div>
  );
};

export default Nwerequest;
