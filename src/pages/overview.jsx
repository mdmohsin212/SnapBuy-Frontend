import React from "react";
import Chart from "react-apexcharts";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileNav from './Profile_nav';
import Footer from './Footer';

const salesChartConfig = {
  series: [
    { name: "Sales", data: [120, 300, 150, 420, 800, 250, 450, 600, 700] },
  ],
  options: {
    chart: { type: "line", height: 240, toolbar: { show: false } },
    dataLabels: { enabled: false },
    colors: ["#6366F1"],
    stroke: { curve: "smooth", width: 2 },
    markers: {
      size: 5,
      colors: ["#6366F1"],
      strokeColors: "#fff",
      strokeWidth: 2,
    },
    xaxis: {
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 5 },
    tooltip: { theme: "dark" },
  },
};

const revenueChartConfig = {
  series: [30, 40, 30],
  options: {
    chart: { type: "pie" },
    labels: ["Product Sales", "Service Revenue", "Subscription"],
    colors: ["#6366F1", "#E11D48", "#10B981"],
    legend: { position: "bottom" },
  },
};

const engagementChartConfig = {
  series: [
    { name: "Users", data: [50, 150, 350, 500, 800, 1100, 1200, 1400, 1600] },
  ],
  options: {
    chart: { type: "bar", height: 240 },
    colors: ["#F59E0B"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
    grid: { borderColor: "#E5E7EB", strokeDashArray: 5 },
  },
};

const Overview = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="d-flex flex-grow-1 flex-wrap flex-column flex-md-row p-0 m-0">
        <div className="order-1 order-md-1 d-flex justify-content-center align-items-center text-start py-1">
          <ProfileNav />
        </div>

        <div className="container-fluid mt-4 col-12 col-md-10 order-2 order-md-2 pb-5 pt-md-2">
          <div className="row g-4">
            {/* Sales Overview */}
            <div className="col-md-12">
              <div className="card shadow-lg p-3">
                <div className="card-header d-flex align-items-center gap-3 bg-transparent">
                  <div className="rounded-circle bg-primary p-3 text-white">
                    📈
                  </div>
                  <div>
                    <h6 className="mb-0">Sales Overview</h6>
                    <small className="text-muted">Monthly sales trends</small>
                  </div>
                </div>
                <div className="card-body">
                  <Chart
                    options={salesChartConfig.options}
                    series={salesChartConfig.series}
                    type="line"
                    height={240}
                  />
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="col-md-12">
              <div className="card shadow-lg p-3">
                <div className="card-header d-flex align-items-center gap-3 bg-transparent">
                  <div className="rounded-circle bg-danger p-3 text-white">
                    💰
                  </div>
                  <div>
                    <h6 className="mb-0">Revenue Breakdown</h6>
                    <small className="text-muted">Sales distribution</small>
                  </div>
                </div>
                <div className="card-body">
                  <Chart
                    options={revenueChartConfig.options}
                    series={revenueChartConfig.series}
                    type="pie"
                    height={240}
                  />
                </div>
              </div>
            </div>

            {/* User Engagement */}
            <div className="col-md-12">
              <div className="card shadow-lg p-3">
                <div className="card-header d-flex align-items-center gap-3 bg-transparent">
                  <div className="rounded-circle bg-warning p-3 text-white">
                    👥
                  </div>
                  <div>
                    <h6 className="mb-0">User Engagement</h6>
                    <small className="text-muted">New users per month</small>
                  </div>
                </div>
                <div className="card-body">
                  <Chart
                    options={engagementChartConfig.options}
                    series={engagementChartConfig.series}
                    type="bar"
                    height={240}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Overview;
