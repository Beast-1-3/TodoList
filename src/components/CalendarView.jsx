import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { useTodo } from '../contexts/TodoContext'

function CalendarView() {
  const { todos } = useTodo()
  const [selectedDate, setSelectedDate] = useState(new Date())

  const formatDate = (date) => date.toISOString().split('T')[0]

  const tasksForDate = todos.filter(
    (todo) => todo.dueDate === formatDate(selectedDate)
  )

  return (
    <div className="mt-10 p-6 bg-white/10 text-white rounded-xl shadow-xl backdrop-blur-md">
      <h2 className="text-2xl font-bold mb-4 text-center">📅 Calendar View</h2>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="react-calendar-wrapper bg-slate-800 p-2 rounded-xl text-white shadow">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date, view }) => {
              const formatted = formatDate(date)
              const isDue = todos.some(
                (todo) => todo.dueDate === formatted
              )
              return isDue ? 'highlight' : ''
            }}
          />
        </div>
        <div className="w-full sm:w-1/2 text-left">
          <h3 className="text-xl font-semibold mb-2">
            Tasks on {selectedDate.toDateString()}:
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            {tasksForDate.length > 0 ? (
              tasksForDate.map((task) => (
                <li key={task.id} className="flex justify-between">
                  <span>{task.todo}</span>
                  <span>{task.completed ? '✅' : '🕓'}</span>
                </li>
              ))
            ) : (
              <li className="text-gray-300">No tasks</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CalendarView
