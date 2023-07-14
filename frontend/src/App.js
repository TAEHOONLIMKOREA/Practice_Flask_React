import { useEffect, useState } from 'react';
import './App.css';
import { Button, Checkbox, Col, Form, Input } from 'antd';
import axios from "axios";
const baseUrl = "127.0.0.1:80"

const onFinish = (values) => {
  console.log('Success:', values);
  // fetch(
  //   "http://127.0.0.1/add",{
  //   method:'GET',
  //   body: values
  //   }).catch(()=>{
  //     console.log("error!!")
  //   })

  fetch("http://127.0.0.1/users").then(
      // response 객체의 json() 이용하여 json 데이터를 객체로 변화
      res => res.json()
    ).then(
      // 데이터를 콘솔에 출력
      data => console.log(data)
    )
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function App() {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("http://127.0.0.1/users").then(
      // response 객체의 json() 이용하여 json 데이터를 객체로 변화
      res => res.json()
    ).then(
      // 데이터를 콘솔에 출력
      data => console.log(data)
    )
  }, [])

  return (
    <div className="App">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
