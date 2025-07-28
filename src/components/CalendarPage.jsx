import React, { useMemo, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useTodo } from '../contexts';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const { todos } = useTodo();
  const [selected, setSelected] = useState(null);

  const events = useMemo(
    () =>
      todos.map((todo) => ({
        id: todo.id,
        title: todo.todo,
        start: new Date(),
        end: new Date(),
        allDay: true,
      })),
    [todos]
  );

  return (
    <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-3 text-indigo-700">📆 Your Schedule</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => setSelected(event)}
      />
      {selected && (
        <div className="mt-4 text-sm text-gray-700">
          <p><strong>Task:</strong> {selected.title}</p>
        </div>
      )}
    </div>
  );
};

export default CalendarPage;
