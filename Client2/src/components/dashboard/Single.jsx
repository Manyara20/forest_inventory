import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
  } from "recharts";

  const liAFter = `absolute content[""] left-[50%] bottom-0 w-[10px] h-[10px] rounded-[50%] bg-[#f45b69] transform -translate-x-1/2`

  import PropTypes from 'prop-types';
  
  const Single = ({img, title, info, chart, activities }) => {
    return (
      <div className="flex flex-col xl:flex-row gap-[50px]">
        <div className=" flex-[1]">
          <div>
            <div className="flex items-center gap-[20px]">
              {img && <img className=" w-full h-full rounded-[20px] object-cover" src={img} alt="" />}
              <h1 className=" text-[500px]">{title}</h1>
              <button>Update</button>
            </div>
            <div className=" text-[18px]">
              {Object.entries(info).map((item) => (
                <div className=" mt-30 mr-0" key={item[0]}>
                  <span className=" font-bold mr-[10px] uppercase">{item[0]}</span>
                  <span>{item[1]}</span>
                </div>
              ))}
            </div>
          </div>
          <hr />
          {chart && (
            <div className=" mt-[50px] w-[80%] h-[400px] hidden md:block">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={chart.data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  {chart.dataKeys.map((dataKey, index) => (
                    <Line
                      key={index}
                      type="monotone"
                      dataKey={dataKey.name}
                      stroke={dataKey.color}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <div className="flex-[1]">
          <h2 className="mb-[20px]">Latest Activities</h2>
          {activities && (
            <ul>
              {activities.map((activity) => (
                <li className={`list-none relative w-[1px] pt-[50px] bg-[#f45b69] after:${liAFter}`} key={activity.text}>
                  <div className=" min-w-[250px] md:min-w-[480px] p-[15px] bg-[#f45b6810]">
                    <p className=" mb-[5px]">{activity.text}</p>
                    <time className=" text-[12px]">{activity.time}</time>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };

  Single.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    info: PropTypes.object,
    chart: PropTypes.object,
    activities: PropTypes.node
  };
  
  
  export default Single;