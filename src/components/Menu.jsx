import React, { useState } from "react";

import { Menu, Select } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { VscAccount } from "react-icons/vsc";
// import logo from "/images/sopergas.logo";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const HaderMenu = () => {
  let history = useHistory();
  const [current, setcurrent] = useState(`mail`);

  const handleClick = (e) => {
    setcurrent(e.key);
  };

  const { Option } = Select;

  const fackearry = [
    { id: 1, type: "פנייה" },
    { id: 2, type: "הליכה אחרוה" },
  ];
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  let data = { chors: 10 };
  return (
    <div>
      <Menu
        onClick={handleClick}
        selectedKeys={current}
        mode="horizontal"
        dir="rtl"
        triggerSubMenuAction="click"
      >
        <SubMenu key="sub1-2" title="תפריט">
          <Menu.Item key="5">טפסים</Menu.Item>
          <Menu.Item key="6">טפסים שנשלחו</Menu.Item>
        </SubMenu>

        <Menu.Item key="new_complain">
          <Link to="/"> פתיחת פנייה חדשה</Link>
        </Menu.Item>
        <Menu.Item key="new_chors">
          <Link to="/ListOfreq"> מטלות מתוזמנות({data.chors})</Link>
        </Menu.Item>
        <SubMenu key="sub1-3" title="הגדרות">
          <Menu.Item key="5">משתמשים</Menu.Item>
          <Menu.Item key="6">מיקום</Menu.Item>
          <Menu.Item key="7">קטגוריות</Menu.Item>
          <Menu.Item key="8">הגדרות</Menu.Item>
        </SubMenu>
        <Menu.Item key="statisic">סטטיסטיקות</Menu.Item>
        <Menu.Item key="user" icon={<VscAccount />}></Menu.Item>
      </Menu>
    </div>

    /* <div>
<span>  */
    /* 
<Select placeholder="תפריט" style={{ width: 120 }} onChange={handleChange}>
    {fackearry?fackearry.map((el)=>(<Option   dir={"rtl"}value={[el.type,el.id]}>{el.type}</Option>


    )):null}
   
      </Select>


</span>
{" "}
<span>פתח פניה חדשה</span>
{" "}
<span>רשימת פניות</span>
{" "}
<span>מטלות מתוזמנות</span>
{" "}
<span>הגדרות</span>
{" "}
<span>סטטיסטיקות</span>
{" "}   


</div> */
  );
};

export default HaderMenu;
