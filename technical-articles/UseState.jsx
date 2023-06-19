import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfWeek,
  } from 'date-fns';
  import { useState } from 'react';
  
  const Calendar = () => {
    const today = startOfToday();
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const colStartClasses = [
      '',
      'col-start-2',
      'col-start-3',
      'col-start-4',
      'col-start-5',
      'col-start-6',
      'col-start-7',
    ];
  
    const [currentMonth, setCurrentMonth] = useState(() =>
      format(today, 'MMM-yyyy')
    );
    const firstDayOfMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  
    const daysInMonth = eachDayOfInterval({
      start: startOfWeek(firstDayOfMonth),
      end: endOfWeek(endOfMonth(firstDayOfMonth)),
    });
    const getPreviousMonth = () => {
      const firstDayofPreviousMonth = add(firstDayOfMonth, { months: -1 });
      setCurrentMonth(format(firstDayofPreviousMonth, 'MMM-yyyy'));
    };
  
    const getNextMonth = () => {
      const firstDayOfNextMonth = add(firstDayOfMonth, { months: 1 });
      setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
    };
  
    return (
      <div className="h-[388px] w-[378px] rounded-2xl border-[0.5px] border-light-gray bg-white px-4 py-8 text-neutral-dark drop-shadow-lg">
        <div className="flex">
          <div className="ml-6 h-5 w-[108px]">
            <h1 className="text-sm font-medium tracking-[0.006em] text-neutral-dark ">
              {format(firstDayOfMonth, 'MMMM yyyy')}
            </h1>
          </div>
          <div className="flex text-neutral-gray">
            <button type="button">
              <img
                className="ml-[106px]"
                onClick={getPreviousMonth}
                src="/src/assets/icons/back-arrow-icon.svg"
                alt="back-arrow-icon"
              />
            </button>
            <button type="button">
              <img
                className="ml-14"
                onClick={getNextMonth}
                 
                src="/src/assets/icons/forward-arrow-icon.svg"
                alt="forward-arrow-icon"
              />
            </button>
          </div>
        </div>
  
        <div className="ml-6 mr-6 mt-4 grid w-[314px] grid-cols-7 items-center gap-3 py-6 text-xs tracking-[0.031em] text-neutral-gray">
          {days.map((day) => {
            return <div key={crypto.randomUUID()}>{day}</div>;
          })}
        </div>
  
        <div className="ml-6 mr-6 grid grid-cols-7 gap-3 text-xs">
          {daysInMonth.map((day) => {
            return (
              <div
                key={crypto.randomUUID()}
                className={colStartClasses[getDay(day)]}
              >
                <p
                  className={`flex h-7 w-7 cursor-pointer items-center justify-center rounded-full  hover:text-white ${
                    isSameMonth(day, today) ? 'text-gray-900' : 'text-gray-400'
                  } ${!isToday(day) && 'hover:bg-neutral-blue'} ${
                    isToday(day) && 'bg-neutral-purple text-white'
                  }`}
                >
                  {format(day, 'd')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  export default Calendar;
  