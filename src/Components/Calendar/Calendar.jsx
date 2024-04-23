import React from "react";
import "./Calendar.css";

const Calendar = () => {
  return (
    <div>
      <div className="weekly-calendar">
        <div className="header">Weekly Calendar</div>
        <div className="calendar">
          <div className="calendar-day">
            <div className="day">
              Mon
              <p>18</p>
            </div>
            <div className="day">
              Tue
              <p>19</p>
            </div>
            <div className="day">
              Wed
              <p>20</p>
            </div>
            <div className="day">
              Thu
              <p>21</p>
            </div>
            <div className="day">
              Fri
              <p>22</p>
            </div>
          </div>
          <div className="event-container">
            <div className="time">
              <p>8am</p>
              <p>9am</p>
              <p>10am</p>
              <p>11am</p>
              <p>12pm</p>
              <p>1pm</p>
              <p>2pm</p>
              <p>3pm</p>
            </div>
            <div className="calendar-event">
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>8am-9am</p>
              </div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lakas Tapai
                <p>9am-10am</p>
              </div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>10am-11am</p>
              </div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>10am-11am</p>
              </div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>11am-12pm</p>
              </div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>12pm-1pm</p>
              </div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>12pm-1pm</p>
              </div>
              <div className="event event-active">
                Lora montes
                <p>1pm-2pm</p>
              </div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event"></div>
              <div className="event event-active">
                Lora montes
                <p>2pm-3pm</p>
              </div>
              <div className="event"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
