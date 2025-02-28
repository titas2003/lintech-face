// src/pages/LoginPage.js
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

const LoginForm = styled.div`
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

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;

  a {
    color: #00bcd4;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Validation Schema using Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

// Login Page Component
const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const payload = {
        email: values.email,
        password: values.password,
      };

      const response = await axios.post(
        'http://192.168.0.209:5000/api/customer/signin',
        payload
      );

      if (response.data.success) {
        alert('Login successful!');
        // Save the token to localStorage or context for future use
        localStorage.setItem('token', response.data.token);
        navigate('/'); // Redirect to home page after successful login
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <LoginForm>
        <Title>Login</Title>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" placeholder="Enter your email" />
                <ErrorMessage name="email" component={ErrorText} />
              </FormGroup>

              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" placeholder="Enter your password" />
                <ErrorMessage name="password" component={ErrorText} />
              </FormGroup>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Logging In...' : 'Login'}
              </Button>

              <SignupLink>
                Don't have an account? <a href="/signup">Sign Up</a>
              </SignupLink>
            </Form>
          )}
        </Formik>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;