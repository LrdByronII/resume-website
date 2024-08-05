import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import HamburgerIcon from "../assets/images/icons/search.svg";
import useNavItems from "../hooks/useNavItems";

const AppleMenu = () => {
  const items = useNavItems();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Image src={HamburgerIcon} boxSize="60px" objectFit={"cover"} />}
        variant="outline"
      />
      <MenuList>
        {items.map((item) => (
          <MenuItem color="white" _hover={{ opacity: 0.7 }}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default AppleMenu;
