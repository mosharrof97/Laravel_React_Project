// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";

const List = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/event/list");
      setDatas(response.data.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  // Delete Data
  const dataDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/event/delete/${id}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting item: ", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="my-5">
          <h2>Event Booking List</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.length > 0 ? (
                datas.map((data) => (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dataDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default List;
