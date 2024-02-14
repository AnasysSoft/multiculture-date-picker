import {Injectable} from "@angular/core";
import {IMyLocales} from "../interfaces/my-locale.interface";
import {IMyOptions} from "../interfaces/my-options.interface";

import {DEFAULT_LOCALE} from "../constants/constants";
import {CalendarType} from "../enums/calendar-type.enum";

@Injectable()
export class LocaleService {
  private locales: Map<CalendarType, IMyLocales> = new Map<CalendarType, IMyLocales>([
    [CalendarType.Gregorian, {
      "fa": {
        dayLabels: {su: "ی", mo: "د", tu: "س", we: "چ", th: "پ", fr: "ج", sa: "ش"},
        monthLabels: {
          1: "ژانویه",
          2: "فوریه",
          3: "مارس",
          4: "آپریل",
          5: "می",
          6: "ژوئن",
          7: "جولای",
          8: "آگوست",
          9: "سپتامبر",
          10: "اکتبر",
          11: "نوامبر",
          12: "دسامبر"
        },
        dateFormat: "yyyy-mm-dd",
        firstDayOfWeek: "sa",
        sunHighlight: false,
        todayTxt: "امروز"
      },
      "en": {
        dayLabels: {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"},
        monthLabels: {
          1: "Jan",
          2: "Feb",
          3: "Mar",
          4: "Apr",
          5: "May",
          6: "Jun",
          7: "Jul",
          8: "Aug",
          9: "Sep",
          10: "Oct",
          11: "Nov",
          12: "Dec"
        },
        dateFormat: "mm/dd/yyyy",
        firstDayOfWeek: "mo",
        sunHighlight: true,
        todayTxt: "Today"
      }
    }]
    , [CalendarType.Jalali, {
      "fa": {
        dayLabels: {su: "ی", mo: "د", tu: "س", we: "چ", th: "پ", fr: "ج", sa: "ش"},
        monthLabels: {
          1: "فروردین",
          2: "اردیبهشت",
          3: "خرداد",
          4: "تیر",
          5: "مرداد",
          6: "شهریور",
          7: "مهر",
          8: "آبان",
          9: "آذر",
          10: "دی",
          11: "بهمن",
          12: "اسفند"
        },
        dateFormat: "yyyy/mm/dd",
        firstDayOfWeek: "sa",
        sunHighlight: false,
        todayTxt: "Today"
      },
      "en": {
        dayLabels: {su: "Sun", mo: "Mon", tu: "Tue", we: "Wed", th: "Thu", fr: "Fri", sa: "Sat"},
        monthLabels: {
          1: "Farv",
          2: "Ordi",
          3: "Khor",
          4: "Tir",
          5: "Mord",
          6: "Shah",
          7: "Mehr",
          8: "Aban",
          9: "Azar",
          10: "Dey",
          11: "Bahm",
          12: "Esfa"
        },
        dateFormat: "yyyy/mm/dd",
        firstDayOfWeek: "sa",
        sunHighlight: false,
        todayTxt: "Today"
      }
    }]
  ]);

  getLocaleOptions(calendar: CalendarType, locale: string): IMyOptions {
    if(calendar && locale) {
      if(this.locales.has(calendar) && this.locales.get(calendar).hasOwnProperty(locale)) {
        return this.locales.get(calendar)[locale];
      }
    }
    // Default: fa
    return this.locales[DEFAULT_LOCALE];
  }
}
