
import { PieChart, Pie, Cell } from "recharts";

const Statistics = () => {
 
    const storedData = JSON.parse(localStorage.getItem("donate")) || [];

    const donatedItem =  storedData?.length;
    console.log(donatedItem);

    const donated = (((donatedItem/12) * 100).toFixed(1))*1 ;
    const remaining = ((100-donated).toFixed(1))*1 ;

    console.log(  donated ,  remaining);

  const donateData = [
      { name: "Reamining", item: remaining },
      { name: "Donated", item: donated },
  ];

  const requiredColors = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;

  const pieStyle = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100)}%`}
      </text>
    );
  };

  return (
    <div>
      <div className="flex w-[500px] h-[380px] m-auto items-center justify-center">

        <PieChart width={310} height={320}>
          <Pie
            data={donateData}
            cx={150}
            cy={150}
            labelLine={false}
            label={pieStyle}
            outerRadius={150}
            fill="#8884d8"
            dataKey="item"
          >
            {donateData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={requiredColors[index]} />
            ))}
          </Pie>
        </PieChart>

      </div>
      
      <div className=" sm:mx-auto flex flex-col md:flex-row justify-center items-center md:gap-14 pb-10">
        <div className="flex gap-3 justify-center items-center ">
         <h2 className="text-lg pb-1">Your Donation </h2>
         <span className="bg-[#00C49F] h-3 w-24"></span>
        </div>

        <div className="flex gap-3 justify-center items-center ">
         <h2 className="text-lg pb-1">Total Donation </h2>
         <span className="bg-[#FF444A] h-3 w-24"></span>
        </div>

      </div>
    </div>
  );
};

export default Statistics;
