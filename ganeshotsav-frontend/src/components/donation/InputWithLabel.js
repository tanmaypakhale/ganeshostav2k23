import React from 'react';
import styled from '@emotion/styled';

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
    fontSize: '16px'
})

const Input = styled('input')({
    flexGrow: 1,
    height: '40px',
    border: '1px solid white',
    borderRadius: '5px',
    color: '#1D2A35',
    background: '#CCD1D1',
    margin: 0,
    fontSize: '16px',
    padding: '0 5px'
})

const InputWithLabel = (props) => {
    const {value, setValue, label, type, placeholder} = props;
    
    const handleValueChange = (event) => {
        setValue(event.target.value);
    }

    return (
    <Wrapper>
        <Label>{label}</Label>
        <Input value={value}
        onChange={handleValueChange}
        type={type}
        placeholder={placeholder} />
    </Wrapper>
  )
}

export default InputWithLabel
