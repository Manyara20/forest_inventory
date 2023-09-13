import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";
  import PropTypes, { object } from 'prop-types';
 
  const BigChartBox = ({data}) => {
    return (
      <div className=" w-full h-full flex flex-col justify-between">
        <h1 className=" 2xl: text-[24px]  text-white font-medium">Nursery Analytics</h1>
        <div className=" h-[300px] w-[100%]  text-white font-medium">
          <ResponsiveContainer width="99%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="electronic"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
              />
              <Area
                type="monotone"
                dataKey="clothes"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
              <Area
                type="monotone"
                dataKey="books"
                stackId="1"
                stroke="#ffc658"
                fill="#ffc658"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  BigChartBox.propTypes = {
    data: PropTypes.arrayOf(object)
  }
  
  export default BigChartBox;