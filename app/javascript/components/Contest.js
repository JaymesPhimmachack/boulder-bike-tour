import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

const StyledContest = styled.div`
  margin-bottom: 50px;
  .contest {
    max-width: 500px;
  }
  .btn-style {
    height: 35px;
    width: 100px;
    font-size: 1.6rem;
  }
  @media (max-width: 1150px) {
    margin: 0 20px;
  }
`;

const INITIAL_STATE = {
  first_name: "",
  last_name: "",
  email: "",
  slogan: "",
};

const Contest = () => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [formSubmitStatus, setFormSubmitStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:3000/submissions", {
        submission: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.email,
          slogan: values.slogan,
        },
      });
      setValues(INITIAL_STATE);

      if (data.status === "created") {
        setFormSubmitStatus(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <StyledContest>
      <div className='contest mx-auto'>
        <h1 className='text-center mb-4'>Choose Our Slogan Contest</h1>
        <p className='mb-3 mx-auto mt-5'>
          We need a slogan and want you to write it! We are sponsoring for
          anyone to come up with a slogan for the race, and we might even use it
          as our official slogan. Thanks and good luck!
        </p>
        <div className='contest-detail mx-auto my-5'>
          <h3 className='mb-3'>Here's how it works</h3>
          <ol className='mx-3'>
            <li>You'll need to be at least 18 years old and live in the US.</li>
            <li>Complete the survey and bookmark this page.</li>
            <li>Check this sweepstakes page on 9/30/21 to see who won.</li>
          </ol>
        </div>
        {formSubmitStatus ? (
          <div className='mx-auto my-5'>
            <h3>Thank you</h3>
            <p>The form was submitted successfully.</p>
          </div>
        ) : (
          <div className='mx-auto mt-5'>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  size='lg'
                  type='text'
                  placeholder='First Name'
                  name='first_name'
                  value={values.first_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size='lg'
                  type='text'
                  placeholder='Last Name'
                  name='last_name'
                  value={values.last_name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  size='lg'
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  size='lg'
                  as='textarea'
                  rows={3}
                  placeholder='Slogan'
                  name='slogan'
                  value={values.slogan}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button
                variant='primary'
                type='submit'
                className='rounded-lg btn-style mt-3'
              >
                Submit
              </Button>
            </Form>
          </div>
        )}
      </div>
    </StyledContest>
  );
};

export default Contest;
