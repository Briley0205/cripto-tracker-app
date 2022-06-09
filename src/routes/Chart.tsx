import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { getValue } from "@testing-library/user-event/dist/utils";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            // @ts-ignore
            {
              data: data?.map((price) => [
                Date.parse(price.time_close),
                price.open,
                price.high,
                price.low,
                price.close,
              ]),
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              type: "candlestick",
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
              labels: {
                style: {
                  colors: isDark ? "#668BC4" : "plum",
                },
              },
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#668BC4",
                  downward: "#DF7D46",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
