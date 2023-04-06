import React, { useState, useEffect } from 'react'
import { Box, Button, Text, Tooltip, Menu, MenuButton, MenuItem, MenuDivider, MenuList, Avatar } from '@chakra-ui/react'
import { ChevronDownIcon, BellIcon } from '@chakra-ui/icons'
import SearchIcon from '@mui/icons-material/Search';
import { ChatState } from '../../context/chatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from "react-router-dom";


const SideDrawer = () => {
    const { user } = ChatState()
    const [search, setSearch] = useState();
    const [result, setResult] = useState();
    const [loading, setLoading] = useState();
    const [loadingChat, setLoadingChat] = useState();
    const navigate = useNavigate();
    // const { setUser } = ChatState()
    // useEffect(() => {
    //     const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //     setUser(userInfo);

    //     if (!user) navigate("/")
    // }, [navigate]);
    const Logout = () => {
        localStorage.removeItem("userInfo")
        navigate("/")
    }
    return (
        <div>
            <Box display='flex' justifyContent='space-between' alignItems='center' bg='white' w="100%" p='5px 10px' borderWidth='5px'>
                <Tooltip label="Search Users to Chat" hasArrow placement='bottom-end'>
                    <Button variant='ghost'><SearchIcon />
                        <Text display={{ base: "none", md: "flex" }} px="4">Search User</Text></Button>
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
        </div>
    )
}

export default SideDrawer
