import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import PropTypes, { object } from 'prop-types'



const BarChartBox = ({title, color,  dataKey, chartData}) => {
  return (
    <div className="w-full h-full">
      <h1 className=" text-[20px] mb-[20px]">{title}</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{fill:"none"}}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

BarChartBox.propTypes ={
    title: PropTypes.string,
    color: PropTypes.string,
    dataKey: PropTypes.string,
    chartData: PropTypes.arrayOf(object)
}

export default BarChartBox;