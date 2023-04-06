import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, Image, Text } from "@chakra-ui/react"
import VisibilityIcon from '@mui/icons-material/Visibility';

const ProfileModal = ({ user, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            {children ? (<span onClick={onOpen}>{children}</span>) : (<VisibilityIcon onClick={onOpen} />)}
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize="40px" fontFamily="Work sans" display="flex" justifyContent="center">{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display="flex" flexDir="coloumn" alignItems="center" justifyContent="space-between">
                        <Image borderRadius="full" boxSize="150px" src={user.pic} alt={user.name} />
                        <Text fontSize="28px">{user.email}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    )
}

export default ProfileModal
