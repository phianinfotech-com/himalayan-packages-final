import React, { useState, useEffect, useRef } from 'react';
import { HiArrowCircleLeft, HiArrowCircleRight } from 'react-icons/hi';

const DatePicker = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [displayedMonth, setDisplayedMonth] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDatePickerOpen(false);
    onChange(date); // Call the onChange prop to update the selected date in the parent component
  };

  const handleMonthChange = (increment) => {
    setDisplayedMonth((prevMonth) =>
      new Date(prevMonth.getFullYear(), prevMonth.getMonth() + increment)
    );
  };

  const toggleDatePicker = () => {
    setIsDatePickerOpen(!isDatePickerOpen);
  };

  const closeDatePicker = (event) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setIsDatePickerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeDatePicker);
    return () => {
      document.removeEventListener('mousedown', closeDatePicker);
    };
  }, []);

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const daysInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendar = () => {
    const daysInCurrentMonth = getDaysInMonth(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth()
    );
    const firstDay = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth(),
      1
    ).getDay();
    const calendar = Array.from({ length: firstDay }, () => null);

    for (let i = 1; i <= daysInCurrentMonth; i++) {
      calendar.push(new Date(displayedMonth.getFullYear(), displayedMonth.getMonth(), i));
    }

    return calendar;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };

  return (
    <div className="relative w-full max-w-md" ref={datePickerRef}>
      <input
        type="text"
        className="w-full bg-white rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Select Date"
        onFocus={toggleDatePicker}
        value={selectedDate ? formatDate(selectedDate) : ''}
        readOnly
      />
      {isDatePickerOpen && (
        <div className="absolute top-12 right-0 z-50">
          <div className="w-full max-w-md p-4 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => handleMonthChange(-1)}
                className="text-gray-500 hover:text-gray-700 transition-all duration-300"
              >
                <HiArrowCircleLeft className="w-6 h-6" />
              </button>
              <h2 className="text-lg font-semibold">
                {displayedMonth.toLocaleString('default', {
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <button
                onClick={() => handleMonthChange(1)}
                className="text-gray-500 hover:text-gray-700 transition-all duration-300"
              >
                <HiArrowCircleRight className="w-6 h-6" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2">
              {daysInWeek.map((day) => (
                <span key={day} className="text-sm font-medium text-gray-600">
                  {day}
                </span>
              ))}
              {generateCalendar().map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDateChange(date)}
                  className={`p-2 rounded ${
                    selectedDate &&
                    date &&
                    date.toDateString() === selectedDate.toDateString()
                      ? 'bg-secondary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.2s ease',
                  }}
                >
                  {date ? date.getDate() : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
