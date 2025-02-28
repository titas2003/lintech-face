// src/pages/HomePage.js
import React from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaArrowRight, FaStar, FaTruck, FaTags, FaHeadset } from 'react-icons/fa';

// Import local images
import HeroBanner from '../assets/hero-banner.jpg';
import IntelCorei7 from '../assets/intel-core-i7.jpg';
import NvidiaRTX3080 from '../assets/nvidia-rtx-3080.jpg';
import RAM from '../assets/ram.jpg';
import ProcessorIcon from '../assets/processor-icon.png';
import GPUIcon from '../assets/gpu-icon.png';
import StorageIcon from '../assets/storage-icon.png';

// Styled Components (same as before)
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  background: url(${HeroBanner}) no-repeat center center/cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled(ScrollLink)`
  background:rgb(184, 15, 15);
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background:rgb(9, 21, 22);
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const FeaturedProducts = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 0.5rem;
  width: 300px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color:rgb(10, 26, 28);
  font-weight: bold;
`;

const WhyChooseUs = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FeatureCard = styled.div`
  width: 200px;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  color:rgb(21, 169, 227);
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Categories = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const CategoryCard = styled.div`
  width: 190px;
  text-align: center;
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const CategoryName = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;

const Testimonials = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TestimonialCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1rem;
  width: 200px;
  text-align: center;
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #666;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const NewsletterSection = styled.section`
  background:rgb(13, 4, 4);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const NewsletterInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  width: 300px;
`;

const NewsletterButton = styled.button`
  background: #fff;
  color: #00bcd4;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

// Home Page Component
const HomePage = () => {
  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Welcome to LinTech</HeroTitle>
          <HeroSubtitle>Your one-stop shop for affordable computer parts</HeroSubtitle>
          <HeroButton to="featured" smooth={true} duration={500}>
            Shop Now
          </HeroButton>
        </HeroContent>
      </HeroSection>

      {/* Featured Products */}
      <Section id="featured">
        <SectionTitle>Featured Products</SectionTitle>
        <FeaturedProducts>
          <ProductCard>
            <ProductImage src={IntelCorei7} alt="Intel Core i7" />
            <ProductName>Intel Core i7</ProductName>
            <ProductPrice>$299.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductImage src={NvidiaRTX3080} alt="NVIDIA RTX 3080" />
            <ProductName>NVIDIA RTX 3080</ProductName>
            <ProductPrice>$799.99</ProductPrice>
          </ProductCard>
          <ProductCard>
            <ProductImage src={RAM} alt="16GB DDR4 RAM" />
            <ProductName>16GB DDR4 RAM</ProductName>
            <ProductPrice>$99.99</ProductPrice>
          </ProductCard>
        </FeaturedProducts>
      </Section>

      {/* Why Choose Us? */}
      <Section>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <WhyChooseUs>
          <FeatureCard>
            <FeatureIcon>
              <FaTags />
            </FeatureIcon>
            <FeatureTitle>Affordable Prices</FeatureTitle>
            <FeatureDescription>Get the best deals on computer parts.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaTruck />
            </FeatureIcon>
            <FeatureTitle>Fast Delivery</FeatureTitle>
            <FeatureDescription>Receive your orders quickly.</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>
              <FaHeadset />
            </FeatureIcon>
            <FeatureTitle>24/7 Support</FeatureTitle>
            <FeatureDescription>We're here to help you anytime.</FeatureDescription>
          </FeatureCard>
        </WhyChooseUs>
      </Section>

      {/* Categories */}
      <Section>
        <SectionTitle>Shop by Category</SectionTitle>
        <Categories>
          <CategoryCard>
            <CategoryImage src={ProcessorIcon} alt="Processors" />
            <CategoryName>Processors</CategoryName>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage src={GPUIcon} alt="Graphics Cards" />
            <CategoryName>Graphics Cards</CategoryName>
          </CategoryCard>
          <CategoryCard>
            <CategoryImage src={StorageIcon} alt="Storage" />
            <CategoryName>Storage</CategoryName>
          </CategoryCard>
        </Categories>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle>What Our Customers Say</SectionTitle>
        <Testimonials>
          <TestimonialCard>
            <TestimonialText>"Great prices and fast delivery!"</TestimonialText>
            <TestimonialAuthor>- John Doe</TestimonialAuthor>
          </TestimonialCard>
          <TestimonialCard>
            <TestimonialText>"Excellent customer service!"</TestimonialText>
            <TestimonialAuthor>- Jane Smith</TestimonialAuthor>
          </TestimonialCard>
        </Testimonials>
      </Section>

      {/* Newsletter */}
      <NewsletterSection>
        <NewsletterTitle>Subscribe to Our Newsletter</NewsletterTitle>
        <NewsletterForm>
          <NewsletterInput type="email" placeholder="Enter your email" />
          <NewsletterButton>Subscribe</NewsletterButton>
        </NewsletterForm>
      </NewsletterSection>
    </Container>
  );
};

export default HomePage;