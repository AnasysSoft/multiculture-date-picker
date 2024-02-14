import {IMyOptions} from "./my-options.interface";
import {IMyValidateOptions} from "./my-validate-options.interface";
import {IMyDate} from "./my-date.interface";
import {IMyDateFormat} from "./my-date-format.interface";
import {IMyDateRange} from "./my-date-range.interface";
import {IMyMonthLabels} from "./my-month-labels.interface";
import {IMyMonth} from "./my-month.interface";
import {IMyDisabledDate} from "./my-disabled-date.interface";
import {IMyMarkedDate} from "./my-marked-date.interface";
import {IMyDateModel} from "./my-date-model.interface";

export declare interface ICalendarService {
  isDateValid(dateStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDate;

  isDateValidDateRange(dateRangeStr: string, options: IMyOptions, validateOpts: IMyValidateOptions): IMyDateRange;

  getDateValue(dateStr: string, dateFormat: string, delimeters: Array<string>): Array<IMyDateFormat>;

  getMonthNumberByMonthName(df: IMyDateFormat, monthLabels: IMyMonthLabels): number;

  getNumberByValue(df: IMyDateFormat): number;

  parseDefaultMonth(monthString: string): IMyMonth;

  isDisabledDate(date: IMyDate, options: IMyOptions): IMyDisabledDate;

  getDisabledValue(disabled: boolean, styleClass: string): IMyDisabledDate;

  dateMatchToDates(date: IMyDate, dates: Array<IMyDate>): boolean;

  isDisabledMonth(year: number, month: number, options: IMyOptions): boolean;

  isDisabledYear(year: number, options: IMyOptions): boolean;

  isDisabledByDisableUntil(date: IMyDate, disableUntil: IMyDate): boolean;

  isDisabledByDisableSince(date: IMyDate, disableSince: IMyDate): boolean;

  isPastDatesEnabled(date: IMyDate, enableDates: Array<IMyDate>): boolean;

  isFutureDatesEnabled(date: IMyDate, enableDates: Array<IMyDate>): boolean;

  isDatesEnabled(dateBegin: IMyDate, dateEnd: IMyDate, enableDates: Array<IMyDate>): boolean;

  isDisabledByDisableDateRange(dateBegin: IMyDate, dateEnd: IMyDate, disableDateRanges: Array<IMyDateRange>): boolean;

  isMarkedDate(date: IMyDate, options: IMyOptions): IMyMarkedDate;

  getMarkedValue(marked: boolean, color: string, styleClass: string): IMyMarkedDate;

  isHighlightedDate(date: IMyDate, options: IMyOptions): boolean;

  getWeekNumber(date: IMyDate): number;

  getDateModel(date: IMyDate, dateRange: IMyDateRange, dateFormat: string, monthLabels: IMyMonthLabels, rangeDelimiter: string, dateStr: string): IMyDateModel;

  formatDate(date: IMyDate, dateFormat: string, monthLabels: IMyMonthLabels): string;

  getOrdinal(date: number): string;

  getFormattedDate(model: IMyDateModel): string;

  preZero(val: number): string;

  isInitializedDate(date: IMyDate): boolean;

  isDateEarlier(firstDate: IMyDate, secondDate: IMyDate): boolean;

  isDateSameOrEarlier(firstDate: IMyDate, secondDate: IMyDate): boolean;

  isDateSame(firstDate: IMyDate, secondDate: IMyDate): boolean;

  isDateRangeBeginOrEndSame(dateRange: IMyDateRange, date: IMyDate): boolean;

  isDateRangeBegin(dateRange: IMyDateRange, date: IMyDate): boolean;

  isDateRangeEnd(dateRange: IMyDateRange, date: IMyDate): boolean;

  isDateInRange(date: IMyDate, dateRange: IMyDateRange): boolean;

  resetDate(): IMyDate;

  getTimeInMilliseconds(date: IMyDate): number;

  getToday(): IMyDate;

  getDayNumber(date: IMyDate): number;

  getWeekdayIndex(wd: string): number;

  getEpocTime(date: IMyDate): number;

  jsDateToMyDate(date: Date): IMyDate;

  myDateToJsDate(date: IMyDate): Date;

  datesInMonth(m: number, y: number): number;

  datesInPrevMonth(m: number, y: number): number;

  getJsDate(year: number, month: number, day: number): Date;

  getSelectedValue(selectedValue: any, dateRange: boolean): any;

  getKeyCodeFromEvent(event: any): number;

  checkKeyName(key: string, keyName: string): boolean;
}
