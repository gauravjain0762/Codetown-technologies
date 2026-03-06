import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Technologies = () => {
  return (
    <Card className='technologies-card'>
      <Container>
        <div className='technologies-container'>
          <Card.Text className='h3 mx-auto'>
                        we are Code Town Technologies
          </Card.Text>
          <div className='mx-auto technologies-hr' />
          <Card.Title className='h1'>
                        Web, Mobile & Digital Marketing Company
          </Card.Title>
          <Card.Text className='p'>
Code Town Technologies is a trusted technology partner specializing in web development, mobile app development, and digital marketing services. We deliver innovative, scalable, and result-driven solutions. that help businesses grow in the digital world
With 12+ years of industry experience, our team of skilled developers, designers, and digital strategists combines creativity with the latest technologies to build high-quality digital products tailored to each client's needs.
We have successfully delivered 400+ projects for 70+ clients worldwide, helping businesses enhance their digital presence, improve efficiency, and achieve measurable growth.
At Code Town Technologies, our mission is simple to transform ideas into powerful digital solutions that drive success.

          </Card.Text>
        </div>
      </Container>
    </Card>
  );
};

export default Technologies;