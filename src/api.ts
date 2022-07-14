const BASE_URL = `https://api.coinpaprika.com`;

export async function fetchCoins() {
  return fetch(`${BASE_URL}/v1/coins`).then((response) => response.json());
}
export async function fetchCoinInfo(coinId: string) {
  return fetch(`${BASE_URL}/v1/coins/${coinId}`).then((response) =>
    response.json()
  );
}
export async function fetchCoinTickers(coinId: string) {
  return fetch(`${BASE_URL}/v1/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
// export async function fetchCoinHistory(coinId: string) {
//   const endDate = Math.floor(Date.now() / 1000);
//   const startDate = endDate - 60 * 60 * 24 * 5;
//   return fetch(
//     `${BASE_URL}/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
//   ).then((response) => response.json());
// }

//기간별 코인 시세
// export async function fetchCoinPrice(coinId: string) {
//   let today = new Date();
//   let year = today.getFullYear();
//   let month = String(today.getMonth() + 1).padStart(2, "0");
//   let date = String(today.getDate()).padStart(2, "0");
//   let now = year + "-" + month + "-" + date;
//   return fetch(`${BASE_URL}/v1/tickers/${coinId}/historical?start=${now}`)
//     .then((response) => response.json())
//     .then((json) => json.slice(0, 7));
// }
export function fetchCoinPrice(coinId: string) {
  return fetch(`${BASE_URL}/v1/tickers/${coinId}`).then((res) => res.json());
}
export function fetchCoinHistory(coinId: string) {
  // const endDate = Math.floor(Date.now() / 1000);
  // const startDate = endDate - 60 * 60 * 23 * 6 * 1;

  return fetch(
    `${BASE_URL}/v1/coins/${coinId}/ohlcv/today`
    // historical?start=${startDate}&end=${endDate}
  ).then((res) => res.json());
}
