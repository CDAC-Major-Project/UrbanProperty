import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const response = {
    totalUsers: 1234,
    monthlyData: [
      {
        month: "JAN",
        sellerCount: 150,
        buyerCount: 450,
      },
      {
        month: "FEB",
        sellerCount: 165,
        buyerCount: 480,
      },
      {
        month: "MAR",
        sellerCount: 180,
        buyerCount: 520,
      },
      {
        month: "APR",
        sellerCount: 210,
        buyerCount: 560,
      },
      {
        month: "MAY",
        sellerCount: 200,
        buyerCount: 540,
      },
      {
        month: "JUN",
        sellerCount: 225,
        buyerCount: 600,
      },
      {
        month: "JUL",
        sellerCount: 240,
        buyerCount: 630,
      },
      {
        month: "AUG",
        sellerCount: 230,
        buyerCount: 610,
      },
      {
        month: "SEP",
        sellerCount: 255,
        buyerCount: 680,
      },
      {
        month: "OCT",
        sellerCount: 270,
        buyerCount: 720,
      },
      {
        month: "NOV",
        sellerCount: 265,
        buyerCount: 700,
      },
      {
        month: "DEC",
        sellerCount: 300,
        buyerCount: 800,
      },
    ],
  };

  const data = response?.monthlyData;

  console.log("data ", response?.monthlyData);
  console.log("data type  : ", Array.isArray(response?.monthlyData));

  return (
    <div>
      {/* bar chart */}
      <div className="border-2 border-gray-300 bg-white rounded-2xl shadow-gray-300 shadow-lg p-5">
        
        <h3 className="text-lg font-medium ">Buyers vs Sellers</h3>
        <p className="text-sm text-gray-600">
          Monthly comparison of user registrations
        </p>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            width={500}
            height={300}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="sellerCount"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="buyerCount"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
