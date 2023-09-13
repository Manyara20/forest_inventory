import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes from 'prop-types';

const PieChartBox = ({data}) => {
  return (
    <div className=" h-full flex flex-col justify-between">
      <h1 className="text-[16px] 2xl:text-[24px] text-white font-medium">Leads by Source</h1>
      <div className=" flex items-center justify-center w-full h-full">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className=" flex justify-between gap-[10px] text-[14px]">
        {data.map((item) => (
          <div className=" flex flex-col gap-[10px] items-center  text-white font-medium" key={item.name}>
            <div className=" flex gap-[10px] items-center">
              <div className=" w-[10px] h-[10px] rounded-[50%]  text-white font-medium" style={{ backgroundColor: item.color }} />
              <span className=" text-white font-medium">{item.name}</span>
            </div>
            <span className=" text-white font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

PieChartBox.propTypes = {
    data: PropTypes.array
}

export default PieChartBox;