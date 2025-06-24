import { Route, Routes } from "react-router-dom";
import routesConfig from "@/utils/routes";
import {system} from "@/utils/themeConfig";
import { Flex, ChakraProvider } from '@chakra-ui/react';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CursorTracking from "./components/cursorTracking/CursorTracking";

const App = () => {
  
  return (
    <ChakraProvider value={system}>
      <CursorTracking/>
      <Flex dir={"rtl"} direction={"column"}>
        <Header />
        <Routes>
          {routesConfig.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        <Footer />
        
      </Flex>               
    </ChakraProvider>
  )
}

export default App
