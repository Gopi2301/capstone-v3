import { FormControl, FormLabel, InputGroup, InputRightAddon, InputRightElement, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  
  const handleClick = () => setShow(!show)
  
  const postDetails =(pics)=>{};
  
  const [show, setShow] = React.useState(false)
  const submitHandler = ()=>{};
  return (
    <VStack>
      <FormControl id="firstName" isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>

        <InputGroup>
          <Input
            type={show?"text":"password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>

        <InputGroup>
          <Input
            type={show?"text":"password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
           <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
      </InputGroup>
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Pic</FormLabel>
        <Input
        type="file"
        p={1.5}
        accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
