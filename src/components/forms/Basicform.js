import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import axios from 'axios';
import "../../styles/LoginForm.css"

const Basicform = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create an object with the data to send to the API
    const data = {
      title: title,
      body: body,
      userId:10
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        // Reset the form fields after successful submission
        setTitle('');
        setBody('');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <>
      <Layout>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              name='title'
              id='title'
              autoComplete='off'
              placeholder='Title'
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor='body'>Body</label>
            <input
              type='text'
              name='body'
              id='body'
              placeholder='Body'
              autoComplete='off'
              value={body}
              onChange={(event) => setBody(event.target.value)}
            />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </Layout>
    </>
  );
};

export default Basicform;
