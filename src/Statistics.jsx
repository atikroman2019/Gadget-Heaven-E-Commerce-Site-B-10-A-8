import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
    fetch("/gadgets.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="bg-[#D7D7D7] min-h-screen py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#9538E2]">
        📊 Product Price vs Rating Statistics
      </h2>

      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl p-6">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="product_title" tick={{ fontSize: 10 }} angle={-20} textAnchor="end" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="price"
                fill="#9538E2"
                stroke="#9538E2"
                fillOpacity={0.3}
              />
              <Bar dataKey="price" barSize={25} fill="#7E57C2" radius={[6, 6, 0, 0]} />
              <Scatter dataKey="rating" fill="#FFB400" />
            </ComposedChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-600">Loading chart data...</p>
        )}
      </div>
    </div>
  );
};

export default Statistics;
