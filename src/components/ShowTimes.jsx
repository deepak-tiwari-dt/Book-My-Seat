import { useState } from "react";
import Button from "../components/Button";
import { bookingDataObj } from "../utils/constants";

const ShowTimes = () => {
  const [bookingData, setBookingData] = useState(bookingDataObj.details);

  const handleSeatClick = (seatNum, status, className, rowName) => {
    const updatedData = [...bookingDataObj.details];
    const classIndexToBeUpdated = updatedData.findIndex(
      (item) => item.className === className
    );

    const classDataIndexToBeUpdated = updatedData[
      classIndexToBeUpdated
    ].classData.findIndex((item) => item.rowName === rowName);

    const seatNumberIndexToBeUpdated = updatedData[
      classIndexToBeUpdated
    ].classData[classDataIndexToBeUpdated].seatNumbers.findIndex(
      (item) => item.seatNum === seatNum
    );

    updatedData[classIndexToBeUpdated].classData[
      classDataIndexToBeUpdated
    ].seatNumbers[seatNumberIndexToBeUpdated].status = status;

    setBookingData(updatedData);
  };

  return (
    <div>
      <nav>
        <div className="nav-item-container">
          <a href="#back" className="fa fa-angle-left back-logo"></a>
        </div>

        <div className="nav-item-container">
          Fighter <small>(U/A)</small>
          <br />
          <small className="mallname">
            {" "}
            Cinepolis: Nexus Shantiniketan, Bengaluru | Tomorrow, 31 Jan, 09:05
            AM
          </small>
        </div>

        <div className="right-nav-item">
          <div className="nav-item-container">
            <select
              className="ticket-count-button ticket-count-text"
              id="ticket"
              name="ticket"
            >
              <option value="ticket-1" selected>
                1 Ticket
              </option>
              <option value="ticket-2">2 Tickets</option>
              <option value="ticket-3">3 Tickets</option>
              <option value="ticket-4">4 Tickets</option>
              <option value="ticket-5">5 Tickets</option>
              <option value="ticket-6">6 Tickets</option>
              <option value="ticket-7">7 Tickets</option>
              <option value="ticket-8">8 Tickets</option>
              <option value="ticket-9">9 Tickets</option>
              <option value="ticket-10">10 Tickets</option>
            </select>
          </div>
          <div className="nav-item-container">
            <span className="fa fa-close"></span>
          </div>
        </div>
      </nav>

      <header>
        <button className="timing-select-button active">
          09:05 AM <br />
          <span>IMAX</span>
        </button>

        <button className="timing-select-button">
          12:25 PM <br />
          <span>IMAX</span>
        </button>
      </header>

      {bookingData.map((data, index) => {
        return (
          <div key={`class_${index}`} className="container">
            <h2 className="data-class booking-class-header">
              {data.className.toUpperCase()}- Rs.{data.price}.00
            </h2>
            <div className="class-wrapper">
              {data.classData.map((classItem, classIndex) => {
                return (
                  <div key={`classItem_${classIndex}`} className="class-items">
                    <div className="row-name-text">{classItem.rowName}</div>
                    <div className="seat-numbers">
                      {classItem.seatNumbers.map((seat, seatIndex) => {
                        return (
                          <div
                            key={`${classItem.className}_seatNumber_${seatIndex}`}
                          >
                            <Button
                              {...seat}
                              handleSeatClick={handleSeatClick}
                              className={data.className}
                              rowName={classItem.rowName}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className="seat-selection-wrapper">
        <div className="available-box"></div>
        <div className="inner-text">Available</div>

        <div className="selected-box"></div>
        <div className="inner-text">Selected</div>

        <div className="sold-box"></div>
        <div className="inner-text">Sold</div>
      </div>
    </div>
  );
};

export default ShowTimes;
