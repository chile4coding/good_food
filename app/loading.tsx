"use client";
import { AppShell, Box, Grid, Skeleton, Card, Flex } from "@mantine/core";
import Sidebar from "./dashboard/components/SideBar";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export default function Loading() {
  const [opened, { toggle }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 48em)");
  return (
    <AppShell
      padding={0}
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: false },
      }}>
      <AppShell.Navbar p={0} style={{ borderRight: "1px solid #F1F3F5" }}>
        <Sidebar opened={opened} toggle={toggle} isMobile={isMobile} />
      </AppShell.Navbar>

      <AppShell.Main px={0} ml={{ base: 0, sm: 240 }}>
        {/* Sticky NavBar Skeleton */}
        <Box
          style={{
            borderBottom: "1px solid #C8CBD9",
            position: "sticky",
            top: 0,
            zIndex: 100,
            backgroundColor: "#FFFFFF",
          }}
          py={2.1}
          px="lg">
          <Skeleton height={40} width="100%" radius="md" />
        </Box>

        <Box p="lg">
          {/* Dashboard Title Skeleton */}
          <Skeleton height={28} width={150} mb="lg" radius="md" />

          <Grid>
            {/* Revenue Chart Skeleton */}
            <Grid.Col
              span={{ base: 12, md: 8 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <Card p="lg" radius="md" withBorder={false}>
                {/* Header */}
                <Flex justify="space-between" align="flex-start" mb="md">
                  <Box style={{ flex: 1 }}>
                    <Skeleton height={16} width={80} mb="sm" />
                    <Skeleton height={28} width={120} mb="md" />
                    <Flex gap="xs">
                      <Skeleton height={16} width={60} />
                      <Skeleton height={16} width={100} />
                    </Flex>
                  </Box>
                  <Skeleton height={36} width={100} radius="md" />
                </Flex>

                {/* Date Range */}
                <Skeleton height={14} width={180} mb="lg" />

                {/* Chart */}
                <Skeleton height={240} radius="md" mb="lg" />

                {/* Legend */}
                <Flex gap="xl">
                  <Skeleton height={16} width={120} />
                  <Skeleton height={16} width={120} />
                </Flex>
              </Card>
            </Grid.Col>

            {/* Order Time Chart Skeleton */}
            <Grid.Col
              style={{
                borderBottom: "1px solid #C8CBD9",
              }}
              span={{ base: 12, md: 4 }}>
              <Card p="lg" radius="md" withBorder={false}>
                <Skeleton height={16} width={80} mb="sm" />
                <Skeleton height={28} width={100} mb="md" />
                <Skeleton height={200} radius="md" />
              </Card>
            </Grid.Col>

            {/* Rating Chart Skeleton */}
            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <Card p="lg" radius="md" withBorder={false}>
                <Skeleton height={16} width={80} mb="sm" />
                <Skeleton height={28} width={100} mb="md" />
                <Skeleton height={180} radius="md" />
              </Card>
            </Grid.Col>

            {/* Most Ordered Food Skeleton */}
            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
                borderRight: "1px solid #C8CBD9",
              }}>
              <Card p="lg" radius="md" withBorder={false}>
                <Skeleton height={16} width={80} mb="sm" />
                <Skeleton height={28} width={100} mb="md" />
                {[1, 2, 3].map((i) => (
                  <Flex key={i} gap="md" mb="md" align="center">
                    <Skeleton height={50} width={50} radius="md" />
                    <Box style={{ flex: 1 }}>
                      <Skeleton height={14} width="80%" mb="xs" />
                      <Skeleton height={12} width="60%" />
                    </Box>
                  </Flex>
                ))}
              </Card>
            </Grid.Col>

            {/* Orders Chart Skeleton */}
            <Grid.Col
              span={{ base: 12, md: 4 }}
              style={{
                borderBottom: "1px solid #C8CBD9",
              }}>
              <Card p="lg" radius="md" withBorder={false}>
                {/* Header */}
                <Flex justify="space-between" align="flex-start" mb="md">
                  <Box style={{ flex: 1 }}>
                    <Skeleton height={16} width={80} mb="sm" />
                    <Skeleton height={28} width={100} mb="md" />
                    <Flex gap="xs">
                      <Skeleton height={16} width={50} />
                      <Skeleton height={16} width={80} />
                    </Flex>
                  </Box>
                  <Skeleton height={36} width={100} radius="md" />
                </Flex>

                {/* Date Range */}
                <Skeleton height={14} width={160} mb="lg" />

                {/* Chart */}
                <Skeleton height={220} radius="md" mb="lg" />

                {/* Legend */}
                <Flex gap="xl">
                  <Skeleton height={16} width={100} />
                  <Skeleton height={16} width={100} />
                </Flex>
              </Card>
            </Grid.Col>
          </Grid>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
