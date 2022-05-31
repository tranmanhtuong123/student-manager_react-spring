import React, { useEffect, useState } from "react";
import "../css/form.css";
import axios from "axios";
import "moment/locale/zh-cn";
import moment from "moment";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
function FormNewStudent() {
  function handleNewStudent(value) {
    // console.log({ ...value, birthday: value.birthday.format() });
    axios
      .post("http://localhost:8888/api/student/newStudent", value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              handleNewStudent(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              name="studentId"
              label="Student Id"
              rules={[
                {
                  required: true,
                  message: "Please enter your studentId",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your studentId" />
            </Form.Item>

            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your Name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your Name" />
            </Form.Item>

            <Form.Item
              name="placeofbirth"
              label="PlaceOfBirth"
              rules={[
                {
                  required: true,
                  message: "Please enter your PlaceOfBirth",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your PlaceOfBirth" />
            </Form.Item>

            <Form.Item
              name="birthday"
              label="birthday"
              rules={[
                {
                  required: true,
                  message: "Please provide your birthday",
                },
              ]}
              hasFeedback
            >
              {/* <Input placeholder="Type your PlaceOfBirth" /> */}
              <DatePicker
                format="YYYY/MM/DD"
                style={{ width: "100%" }}
                placeholder="Chose date of birth"
              ></DatePicker>
            </Form.Item>

            <Form.Item name="male" label="Gender" requiredMark="optional">
              <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: "Please enter your address",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your address" />
            </Form.Item>
            <Form.Item
              name="depname"
              label="Department"
              rules={[
                {
                  required: true,
                  message: "Please enter your department",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your department" />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button
                block
                style={{ margin: "8px" }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
              <Button block style={{ margin: "8px" }} type="button" href="http://localhost:3000/">
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </header>
      </div>
    </div>
  );
}

export default FormNewStudent;
