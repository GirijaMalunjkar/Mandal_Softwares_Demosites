import { Stack, Text, VStack, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ContactModal from "../components/smallcomponents/ContactModal";
import { useInView, InView } from "react-intersection-observer";

const LandingPage = () => {
  const [modalVisible, setmodalVisible] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: true, delay: 2000 });

  useEffect(() => {
    if (inView) {
      setmodalVisible(true);
      console.log("YES");
    } else {
      console.log("NO");
    }
  }, [inView]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <VStack w="90%" align={"center"}>
      <Text color={"blackAlpha.500"} fontWeight={"semibold"}>
        Key Features
      </Text>
      <Heading ref={ref} fontSize={{ base: "2xl" }} />

      <ContactModal isOpen={modalVisible} setmodalVisible={setmodalVisible} />
      <Stack spacing={5} w="100%" h="100%">
        <ContactModal />
      </Stack>
    </VStack>
  );
};

export default LandingPage;
