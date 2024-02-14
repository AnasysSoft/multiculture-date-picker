import {Injectable} from "@angular/core";
import {IMyOptions} from "../interfaces/my-options.interface";
import {Year} from "../enums/year.enum";
import {DefaultView} from "../enums/default-view.enum";
import {CalAnimation} from "../enums/cal-animation.enum";
import {CalendarType} from "../enums/calendar-type.enum";

@Injectable()
export class DefaultConfigService {
  private defaultGregorianConfig: IMyOptions = {
    calendarType: CalendarType.Gregorian,
    dateRange: false,
    inline: false,
    dayLabels: {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"},
    monthLabels: {1: "Jan", 2: "Feb", 3: "Mar", 4: "Apr", 5: "May", 6: "Jun", 7: "Jul", 8: "Aug", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dec"},
    dateFormat: "yyyy-mm-dd",
    defaultView: DefaultView.Date,
    firstDayOfWeek: "mo",
    satHighlight: false,
    sunHighlight:  true,
    highlightDates: [],
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    monthSelector: true,
    yearSelector: true,
    disableHeaderButtons: true,
    showWeekNumbers: false,
    selectorHeight: "266px",
    selectorWidth: "266px",
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableDates: [],
    disableDateRanges: [],
    disableWeekends: false,
    disableWeekdays: [],
    enableDates: [],
    markDates: [],
    markWeekends: {marked: false, color: ""},
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    closeSelectorOnDateSelect: true,
    closeSelectorOnDocumentClick: true,
    minYear: Year.min,
    maxYear: Year.max,
    showSelectorArrow: true,
    appendSelectorToBody: false,
    focusInputOnDateSelect: true,
    moveFocusByArrowKeys: true,
    dateRangeDatesDelimiter: " - ",
    inputFieldValidation: true,
    showMonthNumber: true,
    todayTxt: "",
    showFooterToday: false,
    calendarAnimation: {in: CalAnimation.None, out: CalAnimation.None},
    viewChangeAnimation: true,
    rtl: false,
    stylesData: {selector: "", styles: ""},
    divHostElement: {enabled: false, placeholder: ""},
    ariaLabelPrevMonth: "Previous Month",
    ariaLabelNextMonth: "Next Month"
  };

  private defaultJalaliConfig: IMyOptions = {
    calendarType: CalendarType.Jalali,
    dateRange: false,
    inline: false,
    dayLabels: {su: "ی", mo: "د", tu: "س", we: "چ", th: "پ", fr: "ج", sa: "ش"},
    monthLabels: {1: "فروردین", 2: "اردیبهشت", 3: "خرداد", 4: "تیر", 5: "مرداد", 6: "شهریور", 7: "مهر", 8: "آبان", 9: "آذر", 10: "دی", 11: "بهمن", 12: "اسفند"},
    dateFormat: "yyyy/mm/dd",
    defaultView: DefaultView.Date,
    firstDayOfWeek: "sa",
    satHighlight: false,
    sunHighlight:  false,
    highlightDates: [],
    markCurrentDay: true,
    markCurrentMonth: true,
    markCurrentYear: true,
    monthSelector: true,
    yearSelector: true,
    disableHeaderButtons: true,
    showWeekNumbers: false,
    selectorHeight: "266px",
    selectorWidth: "266px",
    disableUntil: {year: 0, month: 0, day: 0},
    disableSince: {year: 0, month: 0, day: 0},
    disableDates: [],
    disableDateRanges: [],
    disableWeekends: false,
    disableWeekdays: [],
    enableDates: [],
    markDates: [],
    markWeekends: {marked: false, color: ""},
    alignSelectorRight: false,
    openSelectorTopOfInput: false,
    closeSelectorOnDateSelect: true,
    closeSelectorOnDocumentClick: true,
    minYear: Year.min,
    maxYear: Year.max,
    showSelectorArrow: true,
    appendSelectorToBody: false,
    focusInputOnDateSelect: true,
    moveFocusByArrowKeys: true,
    dateRangeDatesDelimiter: " - ",
    inputFieldValidation: true,
    showMonthNumber: true,
    todayTxt: "امروز",
    showFooterToday: true,
    calendarAnimation: {in: CalAnimation.None, out: CalAnimation.None},
    viewChangeAnimation: true,
    rtl: false,
    stylesData: {selector: "", styles: ""},
    divHostElement: {enabled: false, placeholder: ""},
    ariaLabelPrevMonth: "ماه قبل",
    ariaLabelNextMonth: "ماه بعد"
  };

  public getDefaultConfig(calendar: CalendarType) {
    if (calendar === CalendarType.Jalali)
      return this.defaultJalaliConfig;

    return this.defaultGregorianConfig;
  }
}

