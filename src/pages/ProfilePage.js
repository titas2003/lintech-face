// src/pages/ProfilePage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #1c1c1c;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const CartButton = styled.button`
  background: #00bcd4;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0097a7;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserName = styled.span`
  font-size: 1rem;
`;

const LogoutButton = styled.button`
  background: #ff4d4d;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #cc0000;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 6rem; // Adjust for the fixed header
`;

const ProductCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #00bcd4;
  font-weight: bold;
`;

const ProductDetails = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

const AddToCartButton = styled.button`
  background: #00bcd4;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0097a7;
  }
`;

// Profile Page Component
const ProfilePage = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // For products and customer data
    const [customerName, setCustomerName] = useState(''); // Customer name state
    const navigate = useNavigate();
  
    // Fetch customer details
    useEffect(() => {
      const fetchCustomerDetails = async () => {
        try {
          const token = localStorage.getItem('token'); // Get the token from localStorage
          if (!token) {
            navigate('/login'); // Redirect to login if no token is found
            return;
          }
          
  
          // Fetch customer details
          const customerResponse = await axios.get(
            'http://192.168.0.209:5000/api/customer/getCustomer',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (customerResponse.data.success) {
            setCustomerName(customerResponse.data.customer.name); // Set customer name
          }
        } catch (error) {
          console.error('Error fetching customer details:', error);
          navigate('/login'); // Redirect to login on error
        }
      };
  
      fetchCustomerDetails();
    }, [navigate]);
  
    // Fetch products from the API
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            'http://192.168.0.209:5000/api/customer/product/getAllProducts'
          );
          setProducts(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };
  
      fetchProducts();
    }, []);
  
    // Handle logout
    const handleLogout = () => {
      localStorage.removeItem('token'); // Remove the token from localStorage
      navigate('/login'); // Redirect to the login page
    };
  
    // Handle add to cart
    const handleAddToCart = (productId) => {
      alert(`Added product ${productId} to cart`);
      // Add your cart logic here
    };
  
    // Show loader while loading
    if (loading) {
      return <Loader />;
    }
  
    return (
      <Container>
        {/* Header */}
        <Header>
          <CartButton onClick={() => navigate('/cart')}>Cart</CartButton>
          <UserInfo>
            <UserName>Welcome, {customerName}</UserName>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </UserInfo>
        </Header>
  
        {/* Product Grid */}
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product._id}>
              <ProductImage
                src={`http://192.168.0.209:5000${product.image}`}
                alt={product.name}
              />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>₹{product.price}</ProductPrice>
              <ProductDetails>{product.details}</ProductDetails>
              <AddToCartButton onClick={() => handleAddToCart(product._id)}>
                Add to Cart
              </AddToCartButton>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    );
  };
  
  export default ProfilePage;