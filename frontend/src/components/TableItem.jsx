import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const formatDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  return [year, month, day].join('-');
}

function TableItem({ button, studentId, name, birthday }) {
  return (
    <tr>
      <td>
        <button>
          <Link
            to={{
              pathname: `/edit/${studentId}`,
              state: {
                studentId: studentId,
                name: name,
                birthday: birthday,
              },
            }}
          >
            {button}
          </Link>
        </button>
      </td>
      <td>
        <input type="checkbox" />
      </td>
      <td>
        <Link
          to={{
            pathname: `/detail/${studentId}`,
          }}
        >
          {studentId}
        </Link>
      </td>
      <td>{name}</td>
      <td>{formatDate(birthday)}</td>
    </tr>
  );
}

export default TableItem;
