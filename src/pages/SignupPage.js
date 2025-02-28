// src/pages/SignupPage.js
import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 4rem; // Adjust this value based on your Navbar height
  background: #f0f0f0;
`;

const SignupForm = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorText = styled.div`
  color: red;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  background: #00bcd4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0097a7;
  }
`;

// Validation Schema using Yup
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string()
    .matches(/^\d{6}$/, 'Pincode must be 6 digits')
    .required('Pincode is required'),
  street: Yup.string().required('Street is required'),
  locality: Yup.string().required('Locality is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Signup Page Component
const SignupPage = () => {
  const navigate = useNavigate();

  const handleSignup = async (values, { setSubmitting }) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        address: [
          {
            city: values.city,
            state: values.state,
            pincode: values.pincode,
            street: values.street,
            locality: values.locality,
          },
        ],
        password: values.password,
      };

      const response = await axios.post(
        'http://192.168.0.209:5000/api/customer/signup',
        payload
      );

      if (response.data.success) {
        alert('Signup successful!');
        navigate('/login'); // Redirect to login page after successful signup
      } else {
        alert('Signup failed. Please try again.');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <SignupForm>
        <Title>Sign Up</Title>
        <Formik
          initialValues={{
            name: '',
            email: '',
            phone: '',
            city: '',
            state: '',
            pincode: '',
            street: '',
            locality: '',
            password: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={handleSignup}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" placeholder="Enter your name" />
                <ErrorMessage name="name" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Phone</Label>
                <Input type="text" name="phone" placeholder="Enter your phone number" />
                <ErrorMessage name="phone" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>City</Label>
                <Input type="text" name="city" placeholder="Enter your city" />
                <ErrorMessage name="city" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>State</Label>
                <Input type="text" name="state" placeholder="Enter your state" />
                <ErrorMessage name="state" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Pincode</Label>
                <Input type="text" name="pincode" placeholder="Enter your pincode" />
                <ErrorMessage name="pincode" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Street</Label>
                <Input type="text" name="street" placeholder="Enter your street" />
                <ErrorMessage name="street" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Locality</Label>
                <Input type="text" name="locality" placeholder="Enter your locality" />
                <ErrorMessage name="locality" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component={ErrorText} />
              </FormGroup>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </Form>
          )}
        </Formik>
      </SignupForm>
    </Container>
  );
};

export default SignupPage;