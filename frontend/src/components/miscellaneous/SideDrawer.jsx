import React, { useState, useEffect } from 'react'
import { Box, Button, Text, Tooltip, Menu, MenuButton, MenuItem, MenuDivider, MenuList, Avatar, Input, useToast } from '@chakra-ui/react'
import { ChevronDownIcon, BellIcon, } from '@chakra-ui/icons'
import { Drawer, DrawerOverlay, DrawerHeader, useDisclosure, DrawerContent, DrawerBody } from '@chakra-ui/react'
import SearchIcon from '@mui/icons-material/Search';
import { ChatState } from '../../context/chatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ChatLoading from './ChatLoading.jsx'
import UserListItem from '../userAvatar/userListItem';


const SideDrawer = () => {
    const toast = useToast()
    const { user } = ChatState()
    const [search, setSearch] = useState();
    const [searchResult, setSearchResult] = useState();
    const [loading, setLoading] = useState();
    const [loadingChat, setLoadingChat] = useState();
    const navigate = useNavigate();
    // const { setUser } = ChatState()
    // useEffect(() => {
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //     setUser(userInfo);

    const Logout = () => {
        localStorage.removeItem("userInfo")
        navigate("/")
    }
    const handleSearch = async () => {
        if (!search) {
            toast({
                title: "Please Enter something in search",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-left",
            });
            return;
        }
        try {
            setLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
            }
            const { data } = await axios.get(`http://localhost:4000/api/user?search=${search}`, config)
            setLoading(false);
            setSearchResult(data)
            console.log({ data })
        } catch {
            toast({
                title: "Error Occured!",
                status: "warningerror",
                duration: 5000,
                isClosable: true,
                position: "bottom-left",
            });
        }
    }

    const accessChat = (userId) => { };

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Box display='flex' justifyContent='space-between' alignItems='center' bg='white' w="100%" p='5px 10px' borderWidth='5px'>
                <Tooltip label="Search Users to Chat" hasArrow placement='bottom-end'>
                    <Button variant='ghost'><SearchIcon />
                        <Text display={{ base: "none", md: "flex" }} px="4" onClick={onOpen}>Search User</Text></Button>
                </Tooltip>
                <Text fontSize='2xl'>Flash⚡Chat</Text>
                <div>
                    <Menu>
                        <MenuButton p={1}>
                            <BellIcon fontSize='2xl' m="1px" />
                        </MenuButton>
                        {/* <MenuList></MenuList> */}
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                            <Avatar size='sm' cursor='pointer' name={user.name} />
                        </MenuButton>
                        <MenuList>
                            <ProfileModal user={user}>
                                <MenuItem>My Profile</MenuItem>
                            </ProfileModal>
                            <MenuDivider />
                            <MenuItem onClick={Logout}>Logout</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose} >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
                    <DrawerBody>
                        <Box display="flex" pb={2}>
                            <Input placeholder="Search Name"
                                mr="2"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}>
                            </Input>
                            <Button onClick={handleSearch}>Go</Button>
                        </Box>
                        {loading ? (<ChatLoading />) : (searchResult?.map((user) => (
                            <UserListItem key={user._id} user={user} handleFunction={() => accessChat(user._id)} />
                        )))}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default SideDrawer
