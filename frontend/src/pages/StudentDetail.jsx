import { Button, Form } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "../css/form.css";

import "../css/student.css";
function StudentDetail() {
  const [form] = Form.useForm();
  const { studentId } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8888/api/student/${studentId}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // move FormUpdate
  function clickEdit() {
    console.log(data.studentId);
    navigate(`/edit/${data.studentId}`);
  }

  return (
    <div className="studentDetailContainer">
      {data && (
        <Form
          form={form}
          autoComplete="off"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 14 }}
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          <h1>Student Detail</h1>
          <div className="studentDetail">
            <div className="studentDetailLeft">
              <div>StudentID</div>
              <div>Name</div>
              <div>gender</div>
              <div>BirthDay</div>
              <div>PlaceOfBirth</div>
              <div>Address</div>
              <div>Department</div>
            </div>
            <div className="studentDetailRight">
              <div className="studentId">{data.studentId}</div>
              <div className="name">{data.name}</div>
              <div className="name">{data.male}</div>
              <div className="birthDay">{data.birthday}</div>
              <div className="placeOfBirth">{data.placeofbirth}</div>
              <div className="address">{data.address}</div>
              <div className="department">{data.depname}</div>
            </div>
            <div></div>
          </div>
          <td>
            <Button block type="button" href="http://localhost:3000/">
              Student List
            </Button>
          </td>
          <td>
            <Button block type="button" onClick={clickEdit}>
              Edit...
            </Button>
          </td>
        </Form>
      )}
    </div>
  );
}

export default StudentDetail;
