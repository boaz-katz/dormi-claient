import React, { useState, useRef, useEffect } from "react";
import { Modal, Tag, Form, Menu, Dropdown, Card, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Button from "react-bootstrap/Button";
import {
  Contener,
  StyeldSelect,
  StyeldTag,
} from "../styelscomponents/styeldListReq";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { ImCloudDownload } from "react-icons/im";
import { FaFilter } from "react-icons/fa";
import Item from "antd/lib/list/Item";
const { Option } = Select;
const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Checkform = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (value) => {
    console.log(value);
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const fackearry1 = [
    {
      id: 9999,
      urgency: 1,
      date: "23/4/5",
      incharge: "אביתר",
      phonenumber: "05266336",
      type: "אינסטלציה",
      problom: "סתימה",
      location: "כיתה5",
      status: 2,
    },
    {
      id: 9995,
      urgency: 2,
      date: "23/4/5",
      incharge: "אביתר",
      phonenumber: "05266336",
      type: "אינסטלציה",
      problom: "סתימה",
      location: "כיתה5",
      status: 1,
    },
    {
      id: 9994,
      urgency: 3,
      date: "23/4/5",
      incharge: "בעז",
      phonenumber: "05266336",
      type: "אינסטלציה",
      problom: "סתימה",
      location: "כיתה5",
      status: 1,
    },
  ];
  const [fackearry, setfackearry] = useState(fackearry1);

  const [filter, setfilter] = useState(false);

  const problomtypearry = [
    { type: "חשמל", id: 123 },
    { type: "אינסטלציה", id: 456 },
  ];
  const [problom, setproblom] = useState();

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const [ref, setref] = useState(false);

  function handleChange(value) {
    let requst = fackearry.find((Item) => Item.id === value[1]);
    requst.urgency = value[2];

    setfackearry(fackearry);
    setref(true);
  }
  useEffect(() => {
    setref(false);
  }, [ref]);
  return (
    <Contener>
      <div className="top_icon">
        <span className="export_exel">
          <ImCloudDownload />
        </span>
        <span
          onClick={() => {
            setfilter(!filter);
          }}
          className="filter"
        >
          <FaFilter />
        </span>
      </div>

      {filter ? (
        <div>
          <Form {...layout} name="basic" onFinish={onFinish}>
            <Form.Item label="סוג הבעיה">
              <input
                type="text"
                list="data"
                value={problom}
                onChange={(e) => {
                  setproblom(e.target.value);
                }}
              />

              <datalist id="data">
                {problomtypearry.map((el) => (
                  <option value={el.type} />
                ))}
              </datalist>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                שלח פנייה
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : null}

      {fackearry
        ? fackearry.map((el) => {
            let urgency;
            let urgencytext;

            switch (el.urgency) {
              case 1:
                urgency = {
                  color: "#389e0d",
                  backgroundcoler: "#f6ffed",
                  border: "#b7eb8f",
                };
                urgencytext = "נמוך";
                break;
              case 2:
                urgency = {
                  color: "#fa8c16",
                  backgroundcoler: "#fff7e6",
                  border: "#ffd591;",
                };
                urgencytext = "בינוני";
                break;
              case 3:
                urgency = {
                  color: "#cf1322",
                  backgroundcoler: "#fff1f0",
                  border: "#ffa39e",
                };
                urgencytext = "גבוהה";

                break;
            }

            let status;
            let statustext;

            switch (el.status) {
              case 1:
                status = "#108ee9";
                statustext = "פנייה חדשה";
                break;
              case 2:
                status = "#87d068";
                statustext = "בטיפול";
                break;
            }

            return (
              <div>
                <Card
                  title={`${el.type} / ${el.problom}`}
                  extra={
                    <StyeldSelect
                      primary={urgency}
                      defaultValue={urgencytext}
                      onChange={handleChange}
                      dropdownClassName="dropdownClassName"
                    >
                      <Option value={["נמוך", el.id, 1]}>
                        {" "}
                        {/* <div className="success">נמוך</div> */}
                        <StyeldTag color="success">נמוך</StyeldTag>
                      </Option>
                      <Option value={["בינוני", el.id, 2]}>
                        {" "}
                        <StyeldTag color="warning">בינוני</StyeldTag>
                      </Option>
                      <Option value={["גבוהה", el.id, 3]}>
                        {" "}
                        <Tag color="red">גבוה</Tag>
                      </Option>
                    </StyeldSelect>
                  }
                  style={{ width: "300px" }}
                >
                  <span> {el.id}</span> <span> {el.date}</span>
                  <span>
                    {" "}
                    {el.incharge}
                    {el.phonenumber}
                  </span>
                  <span> {el.location}</span>
                  <span> {el.status}</span>
                  <span>
                    {" "}
                    <Tag color={status}>{statustext}</Tag>
                  </span>
                  <span></span>
                </Card>

                <Modal
                  title="עדכן את רמת הדחיפות"
                  visible={isModalVisible}
                  footer={null}
                  onCancel={handleCancel}
                >
                  <p>הפונה לא יראה את הסיווג</p>
                </Modal>
              </div>
            );
          })
        : null}
    </Contener>
  );
};

export default Checkform;
