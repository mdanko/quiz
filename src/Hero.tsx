import React from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

const StyledJumbotron = styled(Jumbotron)`
  background: #A8DADC;
  height: 90%;
`;

const PointsImage = styled(Image)`
  width: 40%;
  display: block;
  margin: 5px auto;
`;

const style: React.CSSProperties = {
  textAlign: "center",
};

export const Hero: React.FC = () => {
  return (
    <Row>
      <Col md={{ span: 8, offset: 1 }}>
        <StyledJumbotron>
          <h1>Author Quiz</h1>
          <p>Select all books written by the author below</p>
        </StyledJumbotron>
      </Col>
      <Col md={{ span: 2 }}>
        <StyledJumbotron>
          <PointsImage src="images/points.png" rounded alt="Points" />
          <h3 style={style}>10</h3>
        </StyledJumbotron>
      </Col>
    </Row>
  );
}