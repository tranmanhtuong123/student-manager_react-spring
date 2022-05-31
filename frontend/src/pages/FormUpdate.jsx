import React, { useState, useEffect } from "react";
import "../css/form.css";
import axios from "axios";
import { useParams } from "react-router";
import { Form, Button, Checkbox, DatePicker, Input, Select, Space } from "antd";
import "moment/locale/zh-cn";
import moment from "moment";
function FormUpdate() {
  const [form] = Form.useForm();
  const { studentId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8888/api/student/${studentId}`)
      .then((res) => {
        console.log("birthday:", res.data.birthday);
        const date = new Date(res.data.birthday);
        // console.log("birthday1:", date);
        // const ojb = {...res.data,birthday: res.data.birthday.format()}
        // const dateFormat = "YYYY-MM-DD";
        // const selectedStartDate = moment(
        //   res.data.birthday,
        //   dateFormat
        // ).calendar();
        // console.log({ ...res.data, birthday: selectedStartDate });
        // // setData({ ...res.data, birthday: selectedStartDate });
        setData({ ...res.data, birthday: moment(res.data.birthday) });
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    form.setFieldsValue({
      ...data,
    });
  }, [data, form]);

  useEffect(() => {
    if (data) {
      console.log("birthday:", data.birthday);
    }
  }, [data]);

  function handleSubmit(value) {
    console.log(value.birthday._i);
    axios
      .patch(`http://localhost:8888/api/student/${studentId}`, value)
      .then((res) => {
        console.log("update:", res.data);
        setData({ ...res.data, birthday: moment(res.data.birthday) });
      })
      .catch((error) => console.log(error));

    // handleSubmit();
  }

  return (
    <div>
      <div className="App">
        <header className="App-header">
          {data && (
            <Form
              form={form}
              autoComplete="off"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              onFinish={(value) => {
                handleSubmit(value);
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

              <Form.Item name="male" label="Gender" requiredMark="optional">
                <Select placeholder="Select your gender">
                  <Select.Option value="male" name="male">
                    Male
                  </Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                </Select>
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
                  Update
                </Button>
                <Button
                  block
                  style={{ margin: "8px" }}
                  type="button"
                  href="http://localhost:3000/"
                >
                  Cancel1
                </Button>
              </Form.Item>
            </Form>
          )}
        </header>
      </div>
    </div>
  );
}

export default FormUpdate;
