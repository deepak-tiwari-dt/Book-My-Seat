import PropTypes from "prop-types";

const Button = ({
  seatNum,
  status,
  handleSeatClick,
  className,
  rowName,
  gapSize,
  gapDirection,
}) => {
  let buttonClass = "seat-button";
  let seatTextClass = "seat-number-text";

  if (status === "selected") {
    buttonClass += " seat-selected";
    seatTextClass += " seat-text-selected";
  } else if (status === "booked") {
    buttonClass += " grey";
    seatTextClass += " seat-text-booked";
  } else {
    buttonClass += "";
  }

  console.log("first", gapDirection === "left" && `${gapSize}px`, seatNum);
  return (
    <button
      className={`${buttonClass}`}
      style={{
        marginLeft: gapDirection === "left" ? `${gapSize}px` : 0,
        marginRight: gapDirection === "right" ? `${gapSize}px` : 0,
      }}
      onClick={() => {
        const updatedStatus =
          status === "available"
            ? "selected"
            : status === "booked"
            ? "booked"
            : "available";

        handleSeatClick(seatNum, updatedStatus, className, rowName);
      }}
    >
      <div className={seatTextClass}>{seatNum}</div>
    </button>
  );
};

Button.propTypes = {
  seatNum: PropTypes.array,
  status: "available" | "selected" | "booked",
  handleSeatClick: PropTypes.func,
  className: PropTypes.string,
  rowName: PropTypes.string,
  gapSize: PropTypes.string,
  gapDirection: PropTypes.string,
};

export default Button;
