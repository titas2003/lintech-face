// src/pages/ProductDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Loader from '../components/Loader';

// Styled Components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProductDetail = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 6rem; // Adjust for the fixed header
`;

const ProductImage = styled.img`
  width: 50%;
  max-width: 500px;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  width: 50%;
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #00bcd4;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductDetails = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const AddToCartButton = styled.button`
  background: #00bcd4;
  color: #fff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0097a7;
  }
`;

// Product Detail Page Component
const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://192.168.0.209:5000/api/customer/product/getProductById/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Handle add to cart
  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from localStorage
      if (!token) {
        navigate('/login'); // Redirect to login if no token is found
        return;
      }

      // Send the product ID to the API
      const response = await axios.post(
        'http://192.168.0.209:5000/api/customer/order/addToCart',
        {
          productIds: [id], // Send the product ID in an array
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === 'Products added to cart') {
        alert('Product added to cart successfully!');
      } else {
        alert('Failed to add product to cart. Please try again.');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Show loader while loading
  if (loading) {
    return <Loader />;
  }

  // Show error if product is not found
  if (!product) {
    return <Container>Product not found.</Container>;
  }

  return (
    <Container>
      <ProductDetail>
        <ProductImage
          src={`http://192.168.0.209:5000${product.image}`}
          alt={product.name}
        />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>₹{product.price}</ProductPrice>
          <ProductDetails>{product.details}</ProductDetails>
          <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
        </ProductInfo>
      </ProductDetail>
    </Container>
  );
};

export default ProductDetailPage;