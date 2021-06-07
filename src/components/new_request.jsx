import React,{ useState ,Component} from "react";
// import {ReactSelectize, SimpleSelect, MultiSelect} from 'react-selectize';
// import DOM from 'react-dom-factories';
import { Form, Input, Button, Checkbox ,Radio, Space } from 'antd';

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
const Nwerequest=()=> {
  const { TextArea } = Input;

const [typeofreq,settypeofreq]=useState()
const [typs,settyps]=useState(true)
const listtips = [{type:"חשמל",id:123},{type:"אינסטלציה",id:456}]
const problomtypearry =[{type:"חשמל",id:123},{type:"אינסטלציה",id:456}]
const locationarry =[{type:"חדר אוכל",id:123},{type:"פנימייה",id:456}]
const [location,setlocation]=useState()
const [problom,setproblom]=useState()

    const onFinish = (values) => {

let obj ={...typeofreq,...values,location:location,problom:problom}

        console.log('Success:', obj);
      };


const chosentyp = (value)=>{
    settyps(false)
    settypeofreq({problem_id:value.type})


} 




  return (
<div dir="rtl">
    {/* <div> */}


<div>

 {typs?
 <div>
 <h1>יש'ך בעיה?</h1>
 <p>תעדכן אותנו במה מדובר וכבר נתחיל את הטיפול</p>

 
 {listtips.map((el)=>{

  
return (
    <div onClick={()=>{chosentyp(el)}}>
    
      
        {el.type} 
   
    </div>
  );
 })}
 
 </div>
 :
<div>
<button onClick={()=>{

settyps(true)}}>
חזור

</button>




<Form
{...layout}
name="basic"

onFinish={onFinish}

> 
      <Form.Item
        label="סוג הבעיה"
      
        
        >
    
 <input type="text" list="data"  value={problom} onChange={(e)=>{setproblom(e.target.value)}} />

<datalist id="data">
  { problomtypearry.map((el) =>
   <option
   
   value={el.type}
 />

  )}
</datalist>
            
      </Form.Item>

      <Form.Item
        label="בחר מתחם"
       
        
        >
        <input type="text" list="location"  value={location} onChange={(e)=> {
        setlocation(e.target.value)}
        }  />

<datalist id="location" >
  { locationarry.map((el) =>
   <option
   value={el.type}
 />
  )}
</datalist>
      </Form.Item>
      <Form.Item {...tailLayout} name="text" >
      <TextArea rows={4} />
      </Form.Item>
      <Form.Item {...tailLayout} name="radio-group" label="Radio.Group">
      <Radio.Group >
        <Space direction="vertical">
          <Radio value={1}>גבוה</Radio>
          <Radio value={2}>בינוני</Radio>
          <Radio value={3}>נמוך</Radio>
         
        </Space>
      </Radio.Group>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
         שלח פנייה
        </Button>
      </Form.Item>
    </Form>
    
    </div>
    } 

            </div>
</div>

);
}

export default Nwerequest;