import * as React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const DropDown = ({value,setValue, values,label}) => {

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };

  const names = values.map((item,index) => 
    <Option value={item} key={index} sx={
        {
            backgroundColor: '#CCD1D1' , 
            color: '#1D2A35',
        }}>{item}</Option>
  )

  const Wrapper = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    flexDirection: 'column',
    width: '95%',
    margin: '0px auto 0px auto',
})

const Label = styled('p')({
    color: '#F2F4F4',
    textTransform: 'uppercase',
    fontWeight: '600',
    fontSize: '16px',
})

  return (
    <Wrapper>
    <Box >
      <Label>{label}</Label>
      <Select
      value={value}
      placeholder={label}
      sx={{
        width: '100%',
        height: 50,
        backgroundColor: '#CCD1D1' ,
        color: '#1D2A35',
      }}
      onChange={handleChange}
    >
        {names}
    </Select>
    </Box>
    </Wrapper>
  );
}

export default DropDown
