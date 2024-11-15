import { Flex, Text,Button, useMediaQuery,  } from "@chakra-ui/react";
import SoFooterLogo from "../icons/so-coffee-footer";
import DiagonaArrow from "../icons/arrow-diagonal";
import MailIcon from "../icons/mail-icon";

export default function Footer() {
  const isMobile = false;
  return (
    <Flex flexDir="column" justifyContent="flex-start" p="130px 130px 10px 130px" w="100%" bg="#204027">
          <Flex mb="100px" w="100%" alignItems={isMobile ? "center" : undefined} justifyContent={isMobile ? "center" : "space-between"} flexDir={isMobile ? "column" : undefined}>
            <SoFooterLogo />
            <Flex w="60%" flexDir="column" alignItems="flex-end">
              <Text mb="20px" lineHeight="30px" textAlign="end" color="white">
                SoCoffee is a digital catalyst for India’s coffee ecosystem, with the objective of addressing the farm-to-cup gap through a digital first approach. By leveraging content and digitization, SoCoffee aims to connect growers, businesses, and consumers in a seamless, scalable way. For a start, our platform brings inspiring stories, valuable information, and resources to empower every stakeholder in the
                coffee value chain.
              </Text>
              <Button
                background="none"
                color="white"
                borderRadius="0"
                fontWeight="normal"
                border="1px solid #dadada"
                p="20px 40px"
                w="300px"
              >
                Know more about us
                <DiagonaArrow stroke="white" style={{ marginLeft: "5px" }} />
              </Button>
            </Flex>
          </Flex>

          <Flex color="white" flexDir="column">
            <Text mb="10px">Let’s chat over a cup of coffee? Please write to:</Text>
            <Flex>
              <MailIcon style={{ marginRight: "10px" }} />
              hello@socoffee.club
            </Flex>
          </Flex>
        </Flex>
  );
}
