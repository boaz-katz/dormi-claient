import React,{ useState} from "react";

import { Form, Input, Button,  Select  , Switch} from 'antd';
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
const User =()=> {

    const onFinish = (values) => {
        console.log('Success:', values);
      };

      const arry = ["1","2","3"]
  return (
<div dir="rtl">
<p>פרטי משתמש</p>
<Form
      {...layout}
      name="basic"
  
      onFinish={onFinish}
  
    >
      <Form.Item
        label="שם פרטי"
        name="username"
        initialValue="boaz"
   
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="שם משפחה"
        name="last_name"
      
      >
               <Input />

      </Form.Item>
      <Form.Item
        label="כתובת מייל (לצורך כניסה למערכת)"
        name="email"
      
      >
               <Input />

      </Form.Item>
      <Form.Item
        label="חדר ראשוני"
        name="room"
      
      >
            <Select  defaultValue="עברית" style={{ width: 120 }} 
                 >

{arry.map((el)=>{
    
    return<Option>{el}</Option>
             
})
}
    </Select>

      </Form.Item>

      <Form.Item
        label="אישור כניסה לחדרי/דירתי ללא נוכחותי?"
        name="entrance"
      
      >
                                <Switch      defaultChecked={false}  />


      </Form.Item>

      <Form.Item
        label="דרגת הרשאה"
        name="auht_rank"
      
      >
               <Input />

      </Form.Item>
      <Form.Item
        label="שיוך לשנת לימוד (במידה ולוונטי)"
        name="school_year"
      
      >
                        <Select  defaultValue="עברית" style={{ width: 120 }} 
                 >

{arry.map((el)=>{
    
    return<Option>{el}</Option>
             
})
}
    </Select>

      </Form.Item>
      <Form.Item
        label="סיסמא"
        name="password"
      
      >
               <Input />

      </Form.Item>
      <Form.Item
        label="טלפון נייד"
        name="phonenumber"
      
      >
               <Input />

      </Form.Item>
      <Form.Item
        label="שפת ממשק"
        name="language"
      
      >
                        <Select  defaultValue="עברית" style={{ width: 120 }} 
                 >

{arry.map((el)=>{
    
    return<Option>{el}</Option>
             
})
}
    </Select>

      </Form.Item>
      <Form.Item
        label="לאפשר את הפנייה ל:"
        name="send_to"
      
      >
                         <Select  defaultValue="עברית" style={{ width: 120 }} 
                 >

{arry.map((el)=>{
    
    return<Option>{el}</Option>
             
})
}
    </Select>

      </Form.Item>
      <Form.Item
        label="משתמש פעיל?"
        name="user_active"
        // initialValue={true}
        // valuePropName="checked"
        // valuePropName={true}
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>


      <div>
          <div>

              <p>קבלת הודעה מהמערכת:</p>

          </div>
              <p>בעת פתיחת פנייה:</p>
      <Form.Item
        label="באימייל"
        name="open_req_in_email"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <Form.Item
        label="בנוטיפיקציה / הודעה"
        name="open_req_masege"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <p>בעת סגירת פנייה:</p>
      <Form.Item
        label="באימייל"
        name="close_req_in_email"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <Form.Item
        label="בנוטיפיקציה / הודעה"
        name="close_req_masege"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>



      <p>כאשר מתחילים לטפל בפנייה שלי:</p>
      <Form.Item
        label="באימייל"
        name="start_handle_in_email"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <Form.Item
        label="בנוטיפיקציה / הודעה"
        name="start_handle_masege"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <p>כאשר מסיימים את הטיפול בפנייה שלי:</p>
      <Form.Item
        label="באימייל"
        name="end_handle_in_email"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>
      <Form.Item
        label="בנוטיפיקציה / הודעה"
        name="end_handle_masege"
    
   
      >
            <Switch      defaultChecked={false}  />

      </Form.Item>

      </div>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>

  );
}

export default User;