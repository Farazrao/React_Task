import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ApiFiltterButton from "../pages/ApiFiltterButton";
// const API = "https://hn.algolia.com/api/v1/search?query=json";
import "bootstrap/dist/css/bootstrap.min.css";

const API = "https://rickandmortyapi.com/api/character";
const FetchApiData = () => {
  const [Data, setData] = useState([]);

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const jsonData = await res.json();
      const Data = jsonData.results;
      setData(Data);
      setItems(Data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);
  
  const [items, setItems] = useState(Data);

  const menuItems = [...new Set(Data.map((value) => value.status))];

  const filtterItems = (status) => {
    const newItems = Data.filter((value) => value.status === status);
    setItems(newItems);
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center col-12 fw-bold mt-3 mb-5">
            Hacker News Articles
          </h1>
          <ApiFiltterButton
            menuItems={menuItems}
            filtterItems={filtterItems}
            setItems={setItems}
            Data={Data}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Url</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default FetchApiData;
