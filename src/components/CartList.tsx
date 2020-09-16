import React, { FC, useState, useCallback } from 'react';

import styled from 'styled-components';
import Heading from './Heading';
import { FaTrash, FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import money from 'helpers/patterns/money';

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  padding: 0.8rem;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr 0.5fr;
  justify-content: space-between;
  align-items: center;
`;

const QuantityActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuantityAction = styled.div`
  padding: 0.4rem;
  margin: 0.4rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.dark};
  border-radius: 0.2rem;
  color: ${({ theme }) => theme.light};
`;

const CartList: FC = () => {
  const [count, setCount] = useState(1);

  const handleUpdateCount  = useCallback((value) => {
    if (value === 0) {
      return;
    }

    setCount(value);
  }, [setCount])

  return (
    true ? <Container>
      <div>
        <img width="90" src="https://secure-static.vans.com.br/medias/sys_master/vans/vans/hac/hf5/h00/h00/9865709322270/4701000590004U-01-BASEIMAGE-Midres.jpg" alt="product" />
      </div>
      <Content>
        <div>
          <Heading is="h3" normalize>
            Moletom otw crew
          </Heading>
        </div>
        <div>
          <div>Quantity: {count}</div>
          <QuantityActions>
            <QuantityAction onClick={() => handleUpdateCount(count-1)}>
              <FaLongArrowAltLeft />
            </QuantityAction>
            <QuantityAction onClick={() => handleUpdateCount(count+1)} >
              <FaLongArrowAltRight />
            </QuantityAction>
          </QuantityActions>
        </div>
        <div>
          Total <strong>{money(299.99 * count)}</strong>
        </div>
        <div>
          <FaTrash />
        </div>
      </Content>
    </Container> : (
      <div>Não há produtos na sacola</div>
    )
  )
}

export default CartList;
