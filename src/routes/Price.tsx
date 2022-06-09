import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { fetchCoinPrice } from "../api";
import { isDarkAtom } from "../atoms";
import ApexChart from "react-apexcharts";

interface PriceProps {
  coinId: string;
}
interface IPrice {
  timestamp: string;
  price: number;
  volume_24h: number;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IPrice[]>(["price", coinId], () =>
    fetchCoinPrice(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <ApexChart
          type="line"
          series={[{ data: data?.map((price) => price.price) ?? [] }]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              type: "line",
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 3,
            },
            fill: {
              type: "gradient",
              gradient: isDark
                ? { gradientToColors: ["#668BC4"], stops: [0, 100] }
                : { gradientToColors: ["#DF7D46"], stops: [0, 100] },
            },
            colors: ["plum"],
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: {
                style: {
                  colors: isDark ? "#668BC4" : "plum",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Price;
