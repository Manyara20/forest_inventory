
import BarChartBox from "../../components/dashboard/BarChartBox";
import BigChartBox from "../../components/dashboard/BigChartBox";
import ChartBox from "../../components/dashboard/ChartBox";
import PieChartBox from "../../components/dashboard/PieChartBox";
import TopBox from "../../components/dashboard/TobBox";
import {
    BigChartdata,
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  pieChartdata,
} from "../../constants/dashboardData";

const DashboardHome = () => {
  return (
<div className="grid gap-[20px] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row-dense auto-rows-max">
      <div className=" p-[20px] rounded-[10px] border-[2px] border-solid border-soft-bg grid-cols-1 grid-rows-3">
        <TopBox />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid ">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid col-span-1 row-span-3">
        <PieChartBox data={pieChartdata} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid box5">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid hidden md:block col-span-2 row-span-2">
        <BigChartBox data={BigChartdata}/>
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="p-[20px] rounded-[10px] border-[2px] border-solid">
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default DashboardHome;