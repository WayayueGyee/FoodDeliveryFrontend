import { useState, useEffect } from 'react'
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  isEqual,
  getDaysInMonth,
  getDay,
} from 'date-fns'
import InputField from './InputField'
import FieldLabel from './FieldLabel'
import { CalendarIcon } from '@heroicons/react/24/outline'
import ArrowRoundedLeft from '../../icons/ArrowRoundedLeft'
import ArrowRoundedRight from '../../icons/ArrowRoundedRight'

type DatepickerType = 'date' | 'month' | 'year'

export default function DatePicker() {
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [dayCount, setDayCount] = useState<Array<number>>([])
  const [blankDays, setBlankDays] = useState<Array<number>>([])
  const [showDatepicker, setShowDatepicker] = useState(false)
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [type, setType] = useState<DatepickerType>('date')

  const decrement = () => {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
      case 'month':
        setDatepickerHeaderDate((prev) => subYears(prev, 1))
        break
      case 'year':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
    }
  }

  const increment = () => {
    switch (type) {
      case 'date':
        setDatepickerHeaderDate((prev) => addMonths(prev, 1))
        break
      case 'month':
        setDatepickerHeaderDate((prev) => addYears(prev, 1))
        break
      case 'year':
        setDatepickerHeaderDate((prev) => subMonths(prev, 1))
        break
    }
  }

  const isToday = (date: number) =>
    isEqual(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date), selectedDate)

  const setDateValue = (date: number) => () => {
    setSelectedDate(
      new Date(datepickerHeaderDate.getFullYear(), datepickerHeaderDate.getMonth(), date)
    )
    setShowDatepicker(false)
  }

  const getDayCount = (date: Date) => {
    const daysInMonth = getDaysInMonth(date)

    // find where to start calendar day of week
    const dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1))
    const blankdaysArray = []
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i)
    }

    const daysArray = []
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i)
    }

    setBlankDays(blankdaysArray)
    setDayCount(daysArray)
  }

  const isSelectedMonth = (month: number) =>
    isEqual(new Date(selectedDate.getFullYear(), month, selectedDate.getDate()), selectedDate)

  const setMonthValue = (month: number) => () => {
    setDatepickerHeaderDate(
      new Date(datepickerHeaderDate.getFullYear(), month, datepickerHeaderDate.getDate())
    )
    setType('date')
  }

  const toggleDatepicker = () => setShowDatepicker((prev) => !prev)

  const showMonthPicker = () => setType('month')

  const showYearPicker = () => setType('date')

  useEffect(() => {
    getDayCount(datepickerHeaderDate)
  }, [datepickerHeaderDate])

  return (
    <div>
      <FieldLabel htmlFor="date-input">Select Date</FieldLabel>
      <div className="relative">
        {/* <InputField type="hidden" name="date" /> */}
        <InputField
          type="text"
          readOnly
          // className="cursor-pointer w-full pl-4 pr-10 py-3 leading-none rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
          placeholder="Select date"
          name="date-input"
          // TODO: add changing value via keyboard
          value={format(selectedDate, 'yyyy-MM-dd')}
          onClick={toggleDatepicker}
        />
        <div className="cursor-pointer absolute top-0 right-0 px-3 py-2" onClick={toggleDatepicker}>
          <CalendarIcon className="h-5 w-5 text-gray-400" />
        </div>
        {showDatepicker && (
          <div
            className="bg-white mt-12 rounded-lg shadow p-4 absolute top-0 left-0"
            style={{ width: '17rem' }}
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={decrement}
                >
                  <ArrowRoundedLeft className="h-6 w-6 text-gray-500 inline-flex" />
                </button>
              </div>
              {type === 'date' && (
                <div
                  onClick={showMonthPicker}
                  className="flex-grow p-1 text-lg font-bold text-gray-900 cursor-pointer hover:bg-gray-200 rounded-lg"
                >
                  <p className="text-center">{format(datepickerHeaderDate, 'MMMM')}</p>
                </div>
              )}
              <div
                onClick={showYearPicker}
                className="flex-grow p-1 text-lg font-bold text-gray-900 cursor-pointer hover:bg-gray-200 rounded-lg"
              >
                <p className="text-center">{format(datepickerHeaderDate, 'yyyy')}</p>
              </div>
              <div>
                <button
                  type="button"
                  className="transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 rounded-full"
                  onClick={increment}
                >
                  <ArrowRoundedRight className="h-6 w-6 text-gray-500 inline-flex" />
                </button>
              </div>
            </div>
            {type === 'date' && (
              <>
                <div className="flex flex-wrap mb-3 -mx-1">
                  {DAYS.map((day, i) => (
                    <div key={i} style={{ width: '14.26%' }} className="px-1">
                      <div className="text-gray-900 font-medium text-center text-xs">{day}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap -mx-1">
                  {blankDays.map((_, i) => (
                    <div
                      key={i}
                      style={{ width: '14.26%' }}
                      className="text-center border p-1 border-transparent text-sm"
                    ></div>
                  ))}
                  {dayCount.map((d, i) => (
                    <div key={i} style={{ width: '14.26%' }} className="px-1 mb-1">
                      <div
                        onClick={setDateValue(d)}
                        className={`cursor-pointer text-center text-sm rounded-full leading-loose transition ease-in-out duration-100 ${
                          isToday(d)
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-700 hover:bg-indigo-200'
                        }`}
                      >
                        {d}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === 'month' && (
              <div className="flex flex-wrap -mx-1">
                {Array(12)
                  .fill(null)
                  .map((_, i) => (
                    <div key={i} onClick={setMonthValue(i)} style={{ width: '25%' }}>
                      <div
                        className={`cursor-pointer p-5 font-semibold text-center text-sm rounded-lg hover:bg-gray-200 ${
                          isSelectedMonth(i)
                            ? 'bg-indigo-500 text-white'
                            : 'text-gray-700 hover:bg-indigo-200'
                        }`}
                      >
                        {format(
                          new Date(
                            datepickerHeaderDate.getFullYear(),
                            i,
                            datepickerHeaderDate.getDate()
                          ),
                          'MMM'
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}{' '}
          </div>
        )}
      </div>
    </div>
  )
}
