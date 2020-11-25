import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";

type AppsType = {
  name: string;
  description?: string;
  icon: string;
  url: string;
};

const apps: AppsType[] = [
  {
    name: "Add to Calendar",
    description: "Add to Calendar link / button generator.",
    icon: "https://addtocal.sznm.dev/add-to-calendar.svg",
    url: "https://addtocal.sznm.dev",
  },
  {
    name: "InstaDLD",
    description: "Instagram Post downloader. Support multipost download",
    icon: "https://instadld.sznm.dev/instadld.svg",
    url: "https://instadld.sznm.dev",
  },
];

const AppMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isBiggerThanMobile] = useMediaQuery("(min-width: 480px)");

  return (
    <>
      <IconButton aria-label="app-menu" icon={<BiMenu />} onClick={onOpen} />

      <Drawer
        placement={isBiggerThanMobile ? "right" : "top"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerHeader>
            <Heading size="xs">More from sznm.dev</Heading>
          </DrawerHeader>

          <DrawerBody>
            {apps.map(({ name, icon, url, description }, index) => (
              <Link key={index} href={url} _hover={{ textDecoration: "none" }}>
                <Flex
                  marginY={4}
                  alignItems="center"
                  padding={2}
                  borderRadius={12}
                  _hover={{ backgroundColor: "gray.200" }}
                >
                  <Image src={icon} width={12} />
                  <Box marginLeft={4}>
                    <Heading size="sm">{name}</Heading>
                    {description && <Text fontSize="xs">{description}</Text>}
                  </Box>
                </Flex>
              </Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppMenu;
