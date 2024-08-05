import { Box, SimpleGrid } from "@chakra-ui/react";
import useDevices from "../../hooks/useDevices";
import DeviceCard from "./DeviceCard";

const DeviceGrid = () => {
  const data = useDevices();
  const skeletons = [0];
  for (let i = 1; i < 24; i++) skeletons.push(i);

  return (
    <Box>
      <SimpleGrid columns={1} alignItems={"center"}>
        {data.map((device) => (
          <DeviceCard device={device}></DeviceCard>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DeviceGrid;
