import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleClick = () => setShow(!show);

  // const postDetails = (pics) => {
  //   setLoading(true);
  //   if (pics == undefined) {
  //     toast({
  //       title: "Please select an Image!",
  //       status: "warning",
  //       duration: 5000,
  //       isClosable: true,
  //     });
  //     return;
  //   }

  //   if(pics.type==="image/jpeg" || pics.type==="image/png"){

  //   }
  // };

  const [show, setShow] = React.useState(false);
  const navigate = useNavigate()
  
  const submitHandler = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Please fill all Fields !",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    if (password !== confirmPassword){
      toast({
        title:"Passwords Does'nt Match",
        status:"warning",
        duration:5000,
        isClosable:true,
      })
      return;
    }

    try{
      const config ={
        headers:{
          "Content-type":"application/json", 
        }
      }
      const {data}= await axios.post("http://localhost:4000/api/user",{name,email,password,pic},config);
      toast({
        title:"Registration Successful",
        status:"success",
        duration:5000,
        isClosable:true,
      })
      localStorage.setItem("userInfo", JSON.stringify(data))
      navigate('/chats')
    } catch (error){
      console.log(error)
      toast({
        title:"Error Occured!",
        description: error.response.data.message,
        status:"error",
        duration:5000,
        isClosable:true,
      })
    }
  };
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
            type={show ? "text" : "password"}
            placeholder="Enter your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
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
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
