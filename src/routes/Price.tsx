import { useLocation } from "react-router-dom";

import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface IPrice {
  priceData: {
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_15m: number;
    percent_change_30m: number;
    percent_change_1h: number;
    percent_change_6h: number;
    percent_change_12h: number;
    percent_change_24h: number;
    percent_change_7d: number;
    percent_change_30d: number;
    percent_change_1y: number;
    ath_price: number;
    ath_date: Date;
    percent_from_price_ath: number;
  };
}

export default function Price() {
  const {
    state: { priceData },
  } = useLocation<IPrice>();
  const isDarkMod = useRecoilValue(isDarkAtom);
  const {
    percent_change_15m,
    percent_change_30m,
    percent_change_1h,
    percent_change_6h,
    percent_change_12h,
    percent_change_24h,
    percent_change_7d,
    percent_change_30d,
    percent_change_1y,
  } = priceData;
  return (
    <>
      <ApexChart
        type="line"
        series={[
          {
            data: [
              percent_change_1y,
              percent_change_7d,
              percent_change_30d,
              percent_change_24h,
              percent_change_12h,
              percent_change_6h,
              percent_change_1h,
              percent_change_30m,
              percent_change_15m,
            ],
          },
        ]}
        options={{
          theme: {
            mode: isDarkMod ? "dark" : "light",
          },
          chart: {
            type: "line",
            height: 350,
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: [
              "1y",
              "30d",
              "7d",
              "24h",
              "12h",
              "6h",
              "1h",
              "30m",
              "15m",
            ],
          },
          yaxis: {
            tooltip: {
              enabled: false,
            },
          },
          tooltip: {
            enabled: true,
            x: {
              show: true,
              format: "dd MMM",
              formatter: undefined,
            },
            y: {
              formatter: undefined,
              title: {
                formatter: () => "%",
              },
            },
          },
        }}
      />
    </>
  );
}
