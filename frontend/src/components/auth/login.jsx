// import React from "react";
import React,{ useState } from "react";
import { FormControl, FormLabel, InputGroup, InputRightAddon, InputRightElement, VStack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'


const submitHandler = ()=>{};

const Login = () => {

  const handleClick = () => setShow(!show)
  const [show, setShow] = React.useState(false)
  const [password, setPassword] = useState();
  return (
  <div> 
     <VStack>
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
            type={show? "text":"password"}
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
      <Button colorScheme="blue"
      width="100%"
      style={{marginTop:15}}
      onClick={submitHandler}>
        Login
      </Button>
      <Button variant="solid" colorScheme="red" width="100%"
      onClick={()=>{
        setEmail("guest@example.com");
        setPassword("123456")
      }}
      >
        Get Guest User Credentials
      </Button>
     </VStack>
  </div>
  )
};

export default Login;
