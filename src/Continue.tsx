import React from 'react';
import styled from 'styled-components';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

interface Props {
  show: boolean;
  onContinue: () => void;
}

const ContinueRow = styled(Row)`
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ContinueButton = styled(Button)`
  background: #1d3557;
`;

export const Continue: React.FC<Props> = ({ show, onContinue }) => {
  return (
    <ContinueRow>
      {
        show ?
          <Col md={11}>
            <ContinueButton variant="primary" size="lg" className="float-right" onClick={onContinue}>Continue</ContinueButton>
          </Col>
          : null
      }
    </ContinueRow>
  );
};