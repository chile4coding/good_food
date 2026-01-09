import { Box, Card, Flex, Text, Group, Button } from "@mantine/core";
import { TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "01", last6Days: 2100, lastWeek: 1800 },
  { day: "02", last6Days: 1900, lastWeek: 2200 },
  { day: "03", last6Days: 2300, lastWeek: 2400 },
  { day: "04", last6Days: 2200, lastWeek: 2100 },
  { day: "05", last6Days: 2000, lastWeek: 2500 },
  { day: "06", last6Days: 2600, lastWeek: 2300 },
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

export default function OrderChart() {
  return (
    <Card
      p="lg"
      radius="md"
      withBorder={false}
      style={{
        borderColor: "#F1F3F5",
        backgroundColor: "#FFFFFF",
      }}>
      {/* Header */}
      <Flex justify="space-between" align="flex-start" mb="md">
        <Box>
          <Text size="sm" c="gray.6" mb={4}>
            Order
          </Text>
          <Text size="xl" fw={700} c="dark">
            2.568
          </Text>
          <Flex align="center" gap={4} mt={4}>
            <TrendingDown size={14} color="#FF5252" />
            <Text size="xs" c="#FF5252" fw={600}>
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
      </Flex>

      {/* Date Range */}
      <Text size="xs" c="gray.5" mb="lg">
        Sales from 1-6 Dec, 2020
      </Text>

      {/* Chart */}
      <Box style={{ width: "100%", height: 220 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}>
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
              cursor={{ stroke: "#F1F3F5", strokeWidth: 1 }}
            />
            <Line
              type="linear"
              dataKey="lastWeek"
              stroke="#E9ECEF"
              strokeWidth={3}
              dot={{ fill: "#E9ECEF", r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="linear"
              dataKey="last6Days"
              stroke="#5063F0"
              strokeWidth={3}
              dot={{ fill: "#5063F0", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Custom Legend */}
      <CustomLegend />
    </Card>
  );
}
