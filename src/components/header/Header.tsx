import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  VStack,
  Drawer,
  IconButton,
} from '@chakra-ui/react';
import { Menu, X } from "lucide-react";
import sanadLogo from "@/assets/sanad-logo.svg";

interface NavLink {
  title: string;
  section: string;
}

const navLinks: NavLink[] = [
  { title: "من نحن", section: "whoUs" },
  { title: "لماذا سند", section: "whySanad" },
  { title: "المنتج", section: "product" },
  { title: "الأسئلة الشائعة", section: "faq" },
  { title: "تواصل معنا", section: "contact" },
];

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsDrawerOpen(false);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Flex as="header" p="4" bg="white" align="center" justifyContent={"space-between"} borderBottomWidth={"0.5px"} borderColor={"#C6CCC7"}>
      <Flex>
        <Image src={sanadLogo} alt="Sanad Logo" h="20px" />
      </Flex>
      <Flex
        as="nav"
        display={{ base: "none", md: "flex" }}
        gap={"48px"}
        w="auto"
      >
        {navLinks.map((link, i) => (
          <Text 
            key={i} 
            cursor="pointer"
            color={"#000000"}
            fontSize={"16px"}
            w={"fit-content"}
            fontWeight={600}
            onClick={() => scrollToSection(link.section)}
          >
            {link.title}
          </Text>
        ))}
      </Flex>
      <Flex display={{ base: "none", md: "flex" }} justifyContent={"flex-end"}>
        <Button bg={"#2ff291"} p={4} borderRadius={8}>
          <Text fontWeight={500} fontSize={"18px"}> تسجيل دخول </Text>
        </Button>
      </Flex>

      {/* Drawer (only for mobile) */}
      <Box ms="auto" display={{ base: "block", md: "none" }}>
        <Drawer.Root 
          open={isDrawerOpen}
          onOpenChange={(state) => setIsDrawerOpen(state.open)}
          lazyMount={false}
          closeOnInteractOutside={true}
          closeOnEscape={true}
          size="full"
          placement={"start"}
          
        >
          <Drawer.Trigger asChild>
            <IconButton
              variant="ghost"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </IconButton>
          </Drawer.Trigger>
          
          <Drawer.Backdrop 
            onClick={handleDrawerClose}
            bg="blackAlpha.600"
          />
          
          <Drawer.Positioner>
            <Drawer.Content 
              boxShadow="xl"
              w="100%"
              h="100vh"
              bg="white"
            >
              <Flex 
                w="100%" 
                borderBottom="1px solid #eee" 
                flexDirection={"row"} 
                justifyContent={"space-between"} 
                alignItems={"center"} 
                p={"4"}
              >
                <IconButton
                  variant="ghost"
                  onClick={handleDrawerClose}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </IconButton>
                <Image
                  src={sanadLogo}
                  alt="Sanad Logo"
                  h="20px"
                />
              </Flex>

              <Drawer.Body p={0}>
                <VStack gap={0} align="end">
                  {navLinks.map((link, i) => (
                    <React.Fragment key={i}>
                      <Button
                        variant="ghost"
                        justifyContent="flex-end"
                        px={6}
                        py={4}
                        w="100%"
                        color={"#000000"}
                        fontSize={"16px"}
                        fontWeight={600}            
                        onClick={() => {
                          setIsDrawerOpen(false);
                          setTimeout(() => scrollToSection(link.section), 300);
                        }}
                        _hover={{ bg: "gray.50" }}
                        _active={{ bg: "gray.100" }}
                      >
                        {link.title}
                      </Button>
                      {i < navLinks.length - 1 && (
                        <Box w="100%" borderBottom="1px" borderColor="gray.100" />
                      )}
                    </React.Fragment>
                  ))}
                  <Button 
                    bg={"#2ff291"} 
                    p={4} 
                    mx={6} 
                    mt={4}
                    borderRadius={8}
                    _hover={{ bg: "#26d17f" }}
                  >
                    <Text fontWeight={500} fontSize={"18px"}> تسجيل دخول </Text>
                  </Button>
                </VStack>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Box>
    </Flex>
  );
};

export default Header;