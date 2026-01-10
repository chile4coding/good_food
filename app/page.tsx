"use client";
import { AppShell, Burger, Box, Grid, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Sidebar from "./dashboard/components/SideBar";
import NavBar from "./dashboard/components/NavBar";
import RevenueChart from "./dashboard/components/RevenueCahrt";
import OrderTimeChart from "./dashboard/components/OrderTimeChart";
import YourRatingChart from "./dashboard/components/RatingChart";
import MostOrderedFood from "./dashboard/components/MostOrderedFood";
import OrderChart from "./dashboard/components/Orders";

export default function Dashboard() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 48em)");

  return (
    <AppShell
      padding={0}
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}>
      <AppShell.Navbar p={0} style={{ borderRight: "1px solid #F1F3F5" }}>
        <Sidebar opened={opened} toggle={toggle} isMobile={isMobile} />
      </AppShell.Navbar>

      <AppShell.Main px={0} ml={{ base: 0, sm: 240 }}>
        <Box
          style={{
            borderBottom: "1px solid #C8CBD9",
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#FFFFFF",
          }}
          py={2.1}>
          <NavBar opened={opened} toggle={toggle} isMobile={isMobile} />
        </Box>

        <Box p="lg">
          <Text size="xl" fw={600} mb="lg">
            Dashboard
          </Text>
          <Grid>
            <Grid.Col
              span={{ base: 12, md: 8 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <RevenueChart />
            </Grid.Col>
            <Grid.Col
              style={{
                borderBottom: "1px solid #C8CBD9",
              }}
              span={{ base: 12, md: 4 }}>
              <OrderTimeChart />
            </Grid.Col>

            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <YourRatingChart />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <MostOrderedFood />
            </Grid.Col>
            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
              }}>
              <OrderChart />
            </Grid.Col>
          </Grid>
        </Box>

        {/* Main Content Area */}
        {/* <Box p="lg" bg="#F8F9FA">
          Main Content
        </Box> */}
      </AppShell.Main>
    </AppShell>
  );
}
