import React from 'react'
import Navbar from './Navbar';
import Form from './Form';
import styled from '@emotion/styled';

const Wrapper = styled('div')({
  backgroundColor: '#212F3C',
})

const MainPage = () => {
  return (
    <Wrapper>
      <Navbar />
      <Form />
    </Wrapper>
  )
}

export default MainPage;
