import { ChakraProvider, Container } from "@chakra-ui/react";
import { maxWidth } from "../const/layout";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Nav />
      <Container maxWidth={maxWidth} p="40px" minHeight="xl">
        <Component {...pageProps} />
      </Container>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
