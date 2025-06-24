import { Box, Flex, Text, Input, Textarea, Image, Button } from '@chakra-ui/react';
import coloredDecoration from '@/assets/svgs/colored-decoration.svg';
import GradientText from '@/components/text/GradientText';
import { useState } from 'react';

const ContactUs = () => {
  const [email,setEmail] = useState("");
  const [subject,setSubject] = useState("");
  const [body,setBody] = useState("");
  const [emailError, setEmailError] = useState("");


  const isValidEmail = (email:string) => {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  }
  
  return (
    <Flex
      id='contact'
      px={{base:"4px",md:"32px"}}
      direction={{ base: 'column-reverse', md: 'row' }}
      justify="space-between"
      align="stretch"
      py={15}
      bg="#FAFAFA"
      w="100%"
      gap={20}
      minH={"200px"}
      flex={1}
    >

      <Flex direction="column" flex={2} pt={10} gap={6} w="100%">
        <Flex gap={4} direction={{ base: 'column', md: 'row' }}>
          <Box flex={1}>
            <Text fontWeight={500} fontSize={"12px"} color={"#4d4d4d"}>الاسم</Text>
            <Input onChange={(e) => setSubject(e.target.value)} placeholder="محمد خالد" bg="white" borderColor="#E5E5E5" />
          </Box>
          <Box flex={1}>
            <Text fontWeight={500} fontSize={"12px"} color={"#4d4d4d"}>الإيميل</Text>
            <Input 
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailError(isValidEmail(e.target.value) ? "" : "الإيميل غير صحيح")
              }
            }
            placeholder="you@example.com" bg="white" type="email" borderColor="#E5E5E5" />
            <Text color="red"  fontSize="10px" h={"10px"}>{emailError}</Text>
          </Box>
        </Flex>
        <Box>
          <Text fontWeight={500} fontSize={"12px"} color={"#4d4d4d"}>الرسالة</Text>
          <Textarea onChange={(e) => setBody(e.target.value)} placeholder="اكتب رسالتك هنا" bg="white" borderColor="#E5E5E5" minH="200px" />
        </Box>
        <Flex w={"100%"} alignItems={"center"}>
          <Button
            fontWeight={500}
            fontSize="12px"
            disabled={!!emailError || !subject || !body}
            color="white"
            w={{base:"100%",md:"fit-content"}}
            bg="#4BBF86"
            _hover={{
              bg: "#26a36a",
              _active: { bg: "#188354" },
            }}
            _active={{ bg: "#188354" }}
          >
            ارسل رسالة
          </Button>
        </Flex>
      </Flex>

      <Flex direction="column" justify="center" align="flex-end" flex={1} gap={4} alignSelf="stretch">
        <Image src={coloredDecoration} alt="Decoration" w="60px" h="60px" />
        <Flex mt={{base:0,md:"-60px"}} w="100%" align="center" justify="flex-start" h={"100%"}>
          <GradientText fontSize={{base:"40px",md:"55px"}} content="تواصل معنا!" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
