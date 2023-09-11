import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes, { object } from 'prop-types'

const ChartBox = (color, icon, title, dataKey, number, percentage, chartData) => {
  return (
    <div className=" flex h-full flex-col sm:flex-row">
      <div className=" flex-[3] flex flex-col justify-between gap-[20px] sm:gap-[15px] ">
        <div className=" gap-[10px] items-center flex 2xl:text-[14px]">
          <img src={icon} alt="" />
          <span>{title}</span>
        </div>
        <h1 className=" 2xl:text-[20px]">{number}</h1>
        <Link to="/" style={{ color: color }}>
          View all
        </Link>
      </div>
      <div className=" flex-[2] flex flex-col justify-between">
        <div className=" w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col text-right">
          <span
            className=" font-bold text-[16px] 2xl:text-[20px] "
            style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
          >
            {percentage}%
          </span>
          <span className=" text-[14px]">this month</span>
        </div>
      </div>
    </div>
  );
};

ChartBox.propTypes = {
        color: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        dataKey: PropTypes.string,
        number: PropTypes.number | PropTypes.string,
        percentage: PropTypes.number,
        chartData: PropTypes.arrayOf(object),
      };

export default ChartBox;