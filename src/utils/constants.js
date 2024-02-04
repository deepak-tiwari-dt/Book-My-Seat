const executiveRowSeatNumbers = Array.from(
  { length: 29 },
  (_, index) => index + 1
).reverse();
const executiveRowNames = ["C", "D", "E", "F", "G", "H"].reverse();
const executiveSeatData = executiveRowNames.map((item) => ({
  rowName: item,
  seatNumbers: [...executiveRowSeatNumbers].map((item) => {
    return {
      seatNum: item,
      status: "available",
    };
  }),
}));

export const bookingDataObj = {
  details: [
    {
      className: "Premium",
      price: 470.0,
      classData: [
        {
          rowName: "K",
          seatNumbers: Array.from({ length: 27 }, (_, index) => index + 1)
            .reverse()
            .map((item) => {
              const gapSize = item === 27 ? 0 : item === 7 ? 64 : 0;
              const gapDirection =
                item === 27
                  ? "left"
                  : item === 20 || item === 5
                  ? "right"
                  : "left";

              return {
                seatNum: item,
                status: "available",
                gapSize,
                gapDirection,
              };
            }),
        },
        {
          rowName: "J",
          seatNumbers: Array.from({ length: 25 }, (_, index) => index + 1)
            .reverse()
            .map((item) => {
              const gapSize =
                item === 26 ? 32 : item === 20 || item === 7 ? 64 : 0;
              const gapDirection =
                item === 25
                  ? "left"
                  : item === 20 || item === 6
                  ? "right"
                  : "left";

              return {
                seatNum: item,
                status: "available",
                gapSize,
                gapDirection,
              };
            }),
        },
        {
          rowName: "I",
          seatNumbers: Array.from({ length: 25 }, (_, index) => index + 1)
            .reverse()
            .map((item) => {
              const gapSize =
                item === 26 ? 32 : item === 20 || item === 7 ? 64 : 0;
              const gapDirection =
                item === 25
                  ? "left"
                  : item === 20 || item === 5
                  ? "right"
                  : "left";

              return {
                seatNum: item,
                status: "available",
                gapSize,
                gapDirection,
              };
            }),
        },
      ],
    },
    {
      className: "Executive",
      price: 450.0,
      classData: executiveSeatData,
    },
    {
      className: "Normal",
      price: 430.0,
      classData: [
        {
          rowName: "B",
          seatNumbers: Array.from({ length: 21 }, (_, index) => index + 1)
            .reverse()
            .map((item) => {
              const gapSize =
                item === 21 ? 32 : item === 16 || item === 5 ? 64 : 0;
              const gapDirection =
                item === 20
                  ? "left"
                  : item === 20 || item === 5
                  ? "right"
                  : "left";

              return {
                seatNum: item,
                status: "available",
                gapSize,
                gapDirection,
              };
            }),
        },
        {
          rowName: "A",
          seatNumbers: Array.from({ length: 20 }, (_, index) => index + 1)
            .reverse()
            .map((item) => {
              const gapSize =
                item === 21 ? 32 : item === 14 || item === 2 ? 64 : 0;
              const gapDirection =
                item === 20
                  ? "left"
                  : item === 21 || item === 4
                  ? "right"
                  : "left";

              return {
                seatNum: item,
                status: "available",
                gapSize,
                gapDirection,
              };
            }),
        },
      ],
    },
  ],
};
