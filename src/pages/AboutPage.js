// src/pages/AboutPage.js
import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaLightbulb, FaTruck, FaStar } from 'react-icons/fa';

// Import local images
import AboutHero from '../assets/about/about-hero.jpg';
import TeamMember1 from '../assets/about/team-member-1.jpeg';
import TeamMember2 from '../assets/about/team-member-2.jpg';
import TeamMember3 from '../assets/about/team-member-3.jpg';
import Navbar from '../components/Navbar';

// Styled Components
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const HeroSection = styled.section`
  background: url(${AboutHero}) no-repeat center center/cover;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  color: #fff;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const TeamSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
`;

const TeamMember = styled.div`
  width: 200px;
  text-align: center;
`;

const TeamMemberImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const TeamMemberName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const TeamMemberRole = styled.p`
  font-size: 1rem;
  color: #666;
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

const CtaSection = styled.section`
  background:rgb(6, 25, 28);
  color: #fff;
  padding: 4rem 2rem;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CtaButton = styled.button`
  background: #fff;
  color:rgb(225, 20, 51);
  padding: 1rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #f0f0f0;
  }
`;

// About Page Component
const AboutPage = () => {
  return (
    <Container>
      <Navbar />
      {/* Hero Section */}
      <HeroSection>
        <HeroSubtitle>Your trusted partner for affordable computer parts</HeroSubtitle>
      </HeroSection>

      {/* About Us Section */}
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <AboutContent>
          <p>
            Lintech was founded in 2025 with a simple mission: to make high-quality computer parts accessible and affordable for everyone. We believe that everyone deserves the best technology, regardless of their budget.
          </p>
          <p>
            Our team of tech enthusiasts works tirelessly to source the best products at the lowest prices. Whether you're building a gaming PC, upgrading your workstation, or just need a replacement part, we've got you covered.
          </p>
        </AboutContent>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionTitle>Meet Our Team</SectionTitle>
        <TeamSection>
          <TeamMember>
            <TeamMemberImage src={TeamMember1} alt="Team Member" />
            <TeamMemberName>John Doe</TeamMemberName>
            <TeamMemberRole>CEO & Founder</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={TeamMember2} alt="Team Member" />
            <TeamMemberName>Jane Smith</TeamMemberName>
            <TeamMemberRole>Head of Operations</TeamMemberRole>
          </TeamMember>
          <TeamMember>
            <TeamMemberImage src={TeamMember3} alt="Team Member" />
            <TeamMemberName>Mike Johnson</TeamMemberName>
            <TeamMemberRole>Lead Engineer</TeamMemberRole>
          </TeamMember>
        </TeamSection>
      </Section>

      {/* Testimonials Section */}
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
          <TestimonialCard>
            <TestimonialText>"Highly recommended for tech enthusiasts!"</TestimonialText>
            <TestimonialAuthor>- Mike Johnson</TestimonialAuthor>
          </TestimonialCard>
        </Testimonials>
      </Section>

      {/* Call-to-Action Section */}
      <CtaSection>
        <CtaTitle>Ready to Upgrade Your PC?</CtaTitle>
        <CtaButton>Shop Now</CtaButton>
      </CtaSection>
    </Container>
  );
};

export default AboutPage;