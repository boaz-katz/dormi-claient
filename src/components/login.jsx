import React,{ useState} from "react";
import { PostToServer } from "../serveses";
import { Form,Input,Button } from 'antd';
import  QRCode  from 'qrcode.react'
import {Contener} from "../styelscomponents/styeldlogin"


  
  const Login =()=> {
 

    const [fult,setfult]=useState(false)
    let ruter = "login";


let email = "email"
let pas ="pas"
let notfound = "notfound"
let bad="bad"
let program="program"
let captcha="captcha"
let language = 1
let obj ={ status:{aout:false,info: "pas",},language:1}

const onFinish = async (values) => {
    console.log(values);
    //  let res = await PostToServer(ruter, values);
    // console.log(res);
  
    console.log(obj.status.info);
    
   

         switch (obj.status.info) {
            case email:
                setfult(email);
              break;
            case pas:
                setfult(pas);
              break;
            case bad:
                setfult(bad);
        
          }

         
console.log(fult);

    

      };
// const res =   PostToServer("h")

  return (
    // <Contener>
<div>
<div>

hader

</div>
 <Form
    
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
     
    >
      <Form.Item
        label="מייל"
        name="email"
        rules={[
          {
            required: true,
            message: "הכנס מייל",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="סיסמה"
        name="pas"
        rules={[
          {
            required: true,
            message: "הכנס סיסמה",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
        הכנס
        </Button>
      </Form.Item>
    </Form>
    <button>
        שחזר סיסמה
        </button>
{fult?<div>{fult}</div>:null} 
<div>
				<h3 dir="rtl">אין לכם עדיין חשבון בדורמי?</h3>
				<h5 dir="rtl" >	 <a>תלמדו איך עובדים עם ניהול אחזקה חכם</a></h5>
					</div>

          <h4 dir="rtl">מעדיפים להיכנס עם מכשיר נייד? סרקו את הקוד:</h4>

          
          <QRCode className="qrcode" value="https://www.dormi.co.il/users"/>
          
       

       
</div>  
// </Contener>

  );
}

export default Login;
