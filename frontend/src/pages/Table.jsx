import React from "react";
import { useState, useEffect } from "react";
import TableItem from "../components/TableItem";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/table.css";
function Table() {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);

  // load Du Lieu
  useEffect(() => {
    axios
      .get(`http://localhost:8888/api/student`)
      .then((res) => {
        const persons = res.data;
        setState(persons);
        const hello = state.reduce((init, item) => {
          return item + init;
        }, 0);
      })
      .catch((error) => console.log(error));
  }, []);

  const totalStudent = state.reduce((item, index) => {
    return 1 + item;
  }, 0);

  return (
    <>
      <div className="table">
        <div className="table-title">
          <p>Student List </p>
          <p className="count">({totalStudent})</p>
        </div>
        <div className="buttons">
          <button>
            <Link to="/formNewStudent">New...</Link>
          </button>
          <button disabled>Delete</button>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Edit</th>
              <th>Selected</th>
              <th>StudentID</th>
              <th>Name</th>
              <th>Birthday</th>
            </tr>
            {state &&
              state.map((item, index) => {
                return (
                  <TableItem
                    key={index}
                    button={(item.button = "Edit")}
                    studentId={item.studentId}
                    name={item.name}
                    birthday={item.birthday}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
