import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { IDateRange, ITime } from '@utilities/interfaces/common.interface';
import { DurationInputArg1, DurationInputArg2, unitOfTime } from 'moment';

export class TimeHelper {

  static get currentDateTime() {
    return moment(new Date()).format('YYYY-MM-DDTHH:mm:ss');
  }

  static get today() {
    return moment(new Date()).format('YYYY-MM-DD');
  }

  static get currentTime() {
    return moment(new Date()).format('HH:mm');
  }

  public static setDateRange(amount: number, unit: 'months' | 'weeks' | 'days' = 'months'): IDateRange {
    if (amount >= 0) {
      return {
        start: this.formatNgbDate(moment()),
        end: this.formatNgbDate(moment().add(amount, unit))
      };
    }

    return {
      start: this.formatNgbDate(moment().add(amount, unit)),
      end: this.formatNgbDate(moment())
    };
  }

  public static formatNgbDate(date: moment.Moment): NgbDateStruct {
    return new NgbDate(date.year(), date.month() + 1, date.date());
  }

  public static formatNgbDateByYMD(iso: string): NgbDateStruct {
    const date = moment(iso);
    return new NgbDate(date.year(), date.month() + 1, date.date());
  }

  public static formatNgbDateByDate(date: Date): NgbDateStruct {
    return this.formatNgbDate(moment(date));
  }

  public static formatDate(date: NgbDateStruct): string | null {
    return date?.day && date?.month && date?.year ? moment(new Date(date.year, date.month - 1, date.day)).format('YYYY-MM-DD') : null;
  }

  /**
   * @returns YYYY-MM-DDTHH:MM
   */
  public static formatDateTime(date: NgbDateStruct, time: ITime): string | null {
    return date && time ?
      new Date(Date.UTC(date.year, date.month - 1, date.day, time.hour, time.min)).toISOString() : null;
  }

  public static formatISO(date: NgbDateStruct): string | null {
    return date.day && date.month && date.year ? new Date(Date.UTC(date.year, date.month - 1, date.day)).toISOString() : null;
  }

  public static formatYMD(date: Date): string | null {
    return date ? moment(date).format('YYYY-MM-DD') : null;
  }

  public static formatTimeByDate(date: Date): ITime {
    return { hour: moment(date).get('h'), min: moment(date).get('m') };
  }

  /**
   * @description format utc date
   */
  public static formatUTCDateOffset(date: NgbDateStruct, endOf?: unitOfTime.StartOf): string | null {
    return date?.day && date?.month && date?.year ?
      endOf ? moment(new Date(date.year, date.month - 1, date.day)).endOf(endOf).utc().toISOString() :
        moment(new Date(date.year, date.month - 1, date.day)).utc().toISOString() :
      null;
  }

  public static getMomentByTime(time: ITime): moment.Moment {
    return moment().hour(time.hour).minute(time.min);
  }

  /**
  * @description get date before or after
  */
  public static getOtherDate(date: string, amount?: DurationInputArg1, unit?: DurationInputArg2) {
    return moment(new Date(date)).add(amount, unit).format('YYYY-MM-DD');
  }

  public static checkBeforeDate(date: NgbDateStruct, limit: NgbDateStruct, isIso = false) {
    const Date = isIso ? this.formatISO(date) : this.formatDate(date);
    const Limit = isIso ? this.formatISO(limit) : this.formatDate(limit);
    return moment(Date).isBefore(moment(Limit));
  }

  public static checkDateAfterStart(date: NgbDateStruct, limit: NgbDateStruct, isIso = false) {
    const Date = isIso ? this.formatISO(date) : this.formatDate(date);
    const Limit = isIso ? this.formatISO(limit) : this.formatDate(limit);
    return moment(Date).isAfter(moment(Limit));
  }

}
