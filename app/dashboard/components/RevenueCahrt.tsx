import { Box, Card, Flex, Text, Group, Badge, Button } from "@mantine/core";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", lastWeek: 4000, last6Days: 2400 },
  { day: "02", lastWeek: 3000, last6Days: 4500 },
  { day: "03", lastWeek: 2000, last6Days: 3800 },
  { day: "04", lastWeek: 2780, last6Days: 4200 },
  { day: "05", lastWeek: 1890, last6Days: 5200 },
  { day: "06", lastWeek: 2390, last6Days: 5800 },
  { day: "07", lastWeek: 3490, last6Days: 4300 },
  { day: "08", lastWeek: 3490, last6Days: 3900 },
  { day: "09", lastWeek: 3490, last6Days: 4600 },
  { day: "10", lastWeek: 3490, last6Days: 3400 },
  { day: "11", lastWeek: 3490, last6Days: 5300 },
  { day: "12", lastWeek: 3490, last6Days: 5800 },
];

const CustomLegend = () => {
  return (
    <Group gap="xl" justify="flex-start" mt="md">
      <Flex align="center" gap="xs">
        <Box
          w={12}
          h={12}
          style={{ borderRadius: "50%", backgroundColor: "#5063F0" }}
        />
        <Text size="sm" c="gray.6">
          Last 6 days
        </Text>
      </Flex>
      <Flex align="center" gap="xs">
        <Box
          w={12}
          h={12}
          style={{ borderRadius: "50%", backgroundColor: "#E9ECEF" }}
        />
        <Text size="sm" c="gray.6">
          Last Week
        </Text>
      </Flex>
    </Group>
  );
};

export default function RevenueChart() {
  return (
    <Card
      p="lg"
      //   radius="md"
      withBorder={false}
      style={{
        borderColor: "#F1F3F5",
        backgroundColor: "#FFFFFF",
      }}>
      {/* Header */}
      <Flex justify="space-between" align="flex-start" mb="md">
        <Box>
          <Text size="sm" c="gray.6" mb={4}>
            Revenue
          </Text>
          <Text size="xl" fw={700} c="dark">
            IDR 7.852.000
          </Text>
          <Flex align="center" gap={4} mt={4}>
            <TrendingUp size={14} color="#20C997" />
            <Text size="xs" c="#20C997" fw={600}>
              2.1%
            </Text>
            <Text size="xs" c="gray.5">
              vs last week
            </Text>
          </Flex>
        </Box>
        <Button
          size="sm"
          c="#5063F0"
          variant="outline"
          styles={{
            root: {
              borderColor: "#E9ECEF",
              "&:hover": {
                backgroundColor: "#F8F9FA",
              },
            },
          }}>
          View Report
        </Button>
        {/* <Text size="sm" c="#5063F0" fw={600} style={{ cursor: "pointer" }}>
          View Report
        </Text> */}
      </Flex>

      {/* Date Range */}
      <Text size="xs" c="gray.5" mb="lg">
        Sales from 1-12 Dec, 2020
      </Text>

      {/* Chart */}
      <Box style={{ width: "100%", height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
            barGap={2}
            barCategoryGap="15%">
            <CartesianGrid
              strokeDasharray="0"
              stroke="#F1F3F5"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#ADB5BD", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#ADB5BD", fontSize: 12 }}
              hide
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #F1F3F5",
                borderRadius: "8px",
                fontSize: "12px",
              }}
              cursor={{ fill: "rgba(80, 99, 240, 0.05)" }}
            />
            <Bar
              dataKey="lastWeek"
              fill="#5A6ACF "
              radius={[4, 4, 0, 0]}
              maxBarSize={20}
            />
            <Bar
              dataKey="last6Days"
              fill="#E9ECEF"
              radius={[4, 4, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* Custom Legend */}
      <CustomLegend />
    </Card>
  );
}
