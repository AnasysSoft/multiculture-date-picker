import {Injectable} from "@angular/core";
import {IMyDateModel} from "../interfaces/my-date-model.interface";
import {IMyDate} from "../interfaces/my-date.interface";
import {IMyDateRange} from "../interfaces/my-date-range.interface";
import {IMyMonth} from "../interfaces/my-month.interface";
import {IMyMonthLabels} from "../interfaces/my-month-labels.interface";
import {IMyMarkedDate} from "../interfaces/my-marked-date.interface";
import {IMyDisabledDate} from "../interfaces/my-disabled-date.interface";
import {IMyDateFormat} from "../interfaces/my-date-format.interface";
import {IMyValidateOptions} from "../interfaces/my-validate-options.interface";
import {IMyOptions} from "../interfaces/my-options.interface";
import {EMPTY_STR, FR, MO, SA, SU, TH, TU, WE, Y} from "../constants/constants";
import {CalendarType} from "../enums/calendar-type.enum";
import {ICalendarService} from "../interfaces/util.calendar.interface";
import {GregorianCalendar} from "./calendars/calendar-service.gregorian";
import {JalaliCalendar} from "./calendars/calendar-service.jalali";

@Injectable()
export class UtilService {
  weekDays: Array<string> = [SU, MO, TU, WE, TH, FR, SA];

  private calendars: Map<CalendarType, ICalendarService> = new Map<CalendarType, ICalendarService>([
    [CalendarType.Gregorian, new GregorianCalendar()],
    [CalendarType.Jalali, new JalaliCalendar()]
  ]);

  private getCalendar(calendarType?: CalendarType) : ICalendarService{
    if(!calendarType)
      calendarType = CalendarType.Gregorian;

    return this.calendars.get(calendarType);
  }

  isDateValid(calendar: CalendarType, dateStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDate {
    return this.getCalendar(calendar).isDateValid(dateStr, options, validateOpts);
  }

  isDateValidDateRange(calendar: CalendarType, dateRangeStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDateRange {
    return this.getCalendar(calendar).isDateValidDateRange(dateRangeStr, options, validateOpts);
  }

  getDateValue(calendar: CalendarType, dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat> {
    return this.getCalendar(calendar).getDateValue(dateStr, dateFormat, delimeters);
  }

  getMonthNumberByMonthName(calendar: CalendarType, df: IMyDateFormat, monthLabels: IMyMonthLabels): number {
    return this.getCalendar(calendar).getMonthNumberByMonthName(df, monthLabels);
  }

  getNumberByValue(calendar: CalendarType, df: IMyDateFormat): number {
    return this.getCalendar(calendar).getNumberByValue(df);
  }

  parseDefaultMonth(calendar: CalendarType, monthString: string): IMyMonth {
    return this.getCalendar(calendar).parseDefaultMonth(monthString);
  }

  isDisabledDate(calendar: CalendarType, date: IMyDate, options: IMyOptions): IMyDisabledDate {
    return this.getCalendar(calendar).isDisabledDate(date, options);
  }

  getDisabledValue(calendar: CalendarType, disabled: boolean, styleClass: string): IMyDisabledDate {
    return this.getCalendar(calendar).getDisabledValue(disabled, styleClass);
  }

  dateMatchToDates(calendar: CalendarType, date: IMyDate, dates: Array<IMyDate>): boolean {
    return this.getCalendar(calendar).dateMatchToDates(date, dates);
  }

  isDisabledMonth(calendar: CalendarType, year: number, month: number, options: IMyOptions): boolean {
    return this.getCalendar(calendar).isDisabledMonth(year, month, options);
  }

  isDisabledYear(calendar: CalendarType, year: number, options: IMyOptions): boolean {
    return this.getCalendar(calendar).isDisabledYear(year, options);
  }

  isDisabledByDisableUntil(calendar: CalendarType, date: IMyDate, disableUntil: IMyDate): boolean {
    return this.getCalendar(calendar).isDisabledByDisableUntil(date, disableUntil);
  }

  isDisabledByDisableSince(calendar: CalendarType, date: IMyDate, disableSince: IMyDate): boolean {
    return this.getCalendar(calendar).isDisabledByDisableSince(date, disableSince);
  }

  isPastDatesEnabled(calendar: CalendarType, date: IMyDate, enableDates: Array<IMyDate>): boolean {
    return this.getCalendar(calendar).isPastDatesEnabled(date, enableDates);
  }

  isFutureDatesEnabled(calendar: CalendarType, date: IMyDate, enableDates: Array<IMyDate>): boolean {
    return this.getCalendar(calendar).isFutureDatesEnabled(date, enableDates);
  }

  isDatesEnabled(calendar: CalendarType, dateBegin: IMyDate, dateEnd: IMyDate, enableDates: Array<IMyDate>): boolean {
    return this.getCalendar(calendar).isDatesEnabled(dateBegin, dateEnd, enableDates);
  }

  isDisabledByDisableDateRange(calendar: CalendarType, dateBegin: IMyDate, dateEnd: IMyDate, disableDateRanges: Array<IMyDateRange>): boolean {
    return this.getCalendar(calendar).isDisabledByDisableDateRange(dateBegin, dateEnd, disableDateRanges);
  }

  isMarkedDate(calendar: CalendarType, date: IMyDate, options: IMyOptions): IMyMarkedDate {
    return this.getCalendar(calendar).isMarkedDate(date, options);
  }

  getMarkedValue(calendar: CalendarType, marked: boolean, color: string, styleClass: string): IMyMarkedDate {
    return this.getCalendar(calendar).getMarkedValue(marked, color, styleClass);
  }

  isHighlightedDate(calendar: CalendarType, date: IMyDate, options: IMyOptions): boolean {
    return this.getCalendar(calendar).isHighlightedDate(date, options);
  }

  getWeekNumber(calendar: CalendarType, date: IMyDate): number {
    return this.getCalendar(calendar).getWeekNumber(date);
  }

  getDateModel(calendar: CalendarType, date: IMyDate, dateRange: IMyDateRange, dateFormat: string, monthLabels: IMyMonthLabels, rangeDelimiter: string, dateStr: string = EMPTY_STR): IMyDateModel {
    return this.getCalendar(calendar).getDateModel(date, dateRange, dateFormat, monthLabels, rangeDelimiter, dateStr);
  }

  formatDate(calendar: CalendarType, date: IMyDate, dateFormat: string, monthLabels: IMyMonthLabels): string {
    return this.getCalendar(calendar).formatDate(date, dateFormat, monthLabels);
  }

  getOrdinal(calendar: CalendarType, date: number): string {
    return this.getCalendar(calendar).getOrdinal(date);
  }

  getFormattedDate(calendar: CalendarType, model: IMyDateModel): string {
    return this.getCalendar(calendar).getFormattedDate(model);
  }

  preZero(calendar: CalendarType, val: number): string {
    return this.getCalendar(calendar).preZero(val);
  }

  isInitializedDate(calendar: CalendarType, date: IMyDate): boolean {
    return this.getCalendar(calendar).isInitializedDate(date);
  }

  isDateEarlier(calendar: CalendarType, firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getCalendar(calendar).isDateEarlier(firstDate, secondDate);
  }

  isDateSameOrEarlier(calendar: CalendarType, firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getCalendar(calendar).isDateSameOrEarlier(firstDate, secondDate);
  }

  isDateSame(calendar: CalendarType, firstDate: IMyDate, secondDate: IMyDate): boolean {
    return this.getCalendar(calendar).isDateSame(firstDate, secondDate);
  }

  isDateRangeBeginOrEndSame(calendar: CalendarType, dateRange: IMyDateRange, date: IMyDate): boolean {
    return this.getCalendar(calendar).isDateRangeBeginOrEndSame(dateRange, date);
  }

  isDateRangeBegin(calendar: CalendarType, dateRange: IMyDateRange, date: IMyDate): boolean {
    return this.getCalendar(calendar).isDateRangeBegin(dateRange, date);
  }

  isDateRangeEnd(calendar: CalendarType, dateRange: IMyDateRange, date: IMyDate): boolean {
    return this.getCalendar(calendar).isDateRangeEnd(dateRange, date);
  }

  isDateInRange(calendar: CalendarType, date: IMyDate, dateRange: IMyDateRange): boolean {
    return this.getCalendar(calendar).isDateInRange(date, dateRange);
  }

  resetDate(calendar: CalendarType): IMyDate {
    return this.getCalendar(calendar).resetDate();
  }

  getTimeInMilliseconds(calendar: CalendarType, date: IMyDate): number {
    return this.getCalendar(calendar).getTimeInMilliseconds(date);
  }

  getToday(calendar: CalendarType): IMyDate {
    return this.getCalendar(calendar).getToday();
  }

  getDayNumber(calendar: CalendarType, date: IMyDate): number {
    return this.getCalendar(calendar).getDayNumber(date);
  }

  getWeekdayIndex(calendar: CalendarType, wd: string) {
    return this.getCalendar(calendar).getWeekdayIndex(wd);
  }

  getEpocTime(calendar: CalendarType, date: IMyDate): number {
    return this.getCalendar(calendar).getEpocTime(date);
  }

  jsDateToMyDate(calendar: CalendarType, date: Date): IMyDate {
    return this.getCalendar(calendar).jsDateToMyDate(date);
  }

  myDateToJsDate(calendar: CalendarType, date: IMyDate): Date {
    return this.getCalendar(calendar).myDateToJsDate(date);
  }

  datesInMonth(calendar: CalendarType, m: number, y: number): number {
    return this.getCalendar(calendar).datesInMonth(m, y);
  }

  datesInPrevMonth(calendar: CalendarType, m: number, y: number): number {
    return this.getCalendar(calendar).datesInPrevMonth(m, y);
  }

  getJsDate(calendar: CalendarType, year: number, month: number, day: number): Date {
    return this.getCalendar(calendar).getJsDate(year, month, day);
  }

  getSelectedValue(calendar: CalendarType, selectedValue: any, dateRange: boolean): any {
    return this.getCalendar(calendar).getSelectedValue(selectedValue, dateRange);
  }

  getKeyCodeFromEvent(calendar: CalendarType, event: any): number {
    return this.getCalendar(calendar).getKeyCodeFromEvent(event);
  }

  checkKeyName(calendar: CalendarType, key: string, keyName: string): boolean {
    return this.getCalendar(calendar).checkKeyName(key, keyName);
  }
}
