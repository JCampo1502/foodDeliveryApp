import axios from "axios";
export const baseUrl = "http://localhost:3001";

export const axiosUserInstance = axios.create({
    baseURL: `${baseUrl}/user`,
});

export const axiosRestaurantInstance = axios.create({
    baseURL: `${baseUrl}/restaurants`,
});

export const clipPath = {
    height: 108,
    width: 134,
    clipPath: `
      polygon(
          20px 0px,
          114px 0px,
          114px 0px,
          117.962px 0.182px,
          121.456px 0.736px,
          124.494px 1.674px,
          127.088px 3.008px,
          129.25px 4.75px,
          130.992px 6.912px,
          132.326px 9.506px,
          133.264px 12.544px,
          133.818px 16.038px,
          134px 20px,
          90.78px 88px,
          90.78px 88px,
          89.14459px 90.75672px,
          87.19232px 93.55136px,
          84.98013px 96.30664px,
          82.56496px 98.94528px,
          80.00375px 101.39px,
          77.35344px 103.56352px,
          74.67097px 105.38856px,
          72.01328px 106.78784px,
          69.43731px 107.68408px,
          67px 108px,
          20px 108px,
          20px 108px,
          16.038px 107.818px,
          12.544px 107.264px,
          9.506px 106.326px,
          6.912px 104.992px,
          4.75px 103.25px,
          3.008px 101.088px,
          1.674px 98.494px,
          0.736px 95.456px,
          0.182px 91.962px,
          2.2186712959341e-31px 88px,
          0px 20px,
          0px 20px,
          0.182px 16.038px,
          0.736px 12.544px,
          1.674px 9.506px,
          3.008px 6.912px,
          4.75px 4.75px,
          6.912px 3.008px,
          9.506px 1.674px,
          12.544px 0.736px,
          16.038px 0.182px,
          20px 2.2186712959341e-31px
      );
      `,
};
