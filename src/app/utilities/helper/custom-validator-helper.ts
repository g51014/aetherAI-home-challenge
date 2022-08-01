import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {
  /**
   * @description 字元長度檢查
   * @param maxLength 最大長度
   * @param minLength 最小長度，預設為0
   */
  public static stringLengthValidator(maxLength: number, minLength: number = 0): ValidatorFn {
    return ({ value }: AbstractControl) => (typeof value !== 'string' && !!value) ? { typeError: true } :
      typeof value === 'string' && value.trim().length > maxLength ? { maxLength } :
        typeof value === 'string' && value.trim().length < minLength ? { minLength } : null;
  }

  /**
   * @description 最小值檢查
   * @param min 最小值
   */
  public static minValueValidator(min: number): ValidatorFn {
    return ({ value }: AbstractControl) => (typeof value !== 'number' && !!value) ? { typeError: true } :
      typeof min === 'number' && value <= min ? { min } : null;
  }

  /**
   * @description 檢查swift格式是否正確
   */
  public static swiftCodeValidator({ value }: AbstractControl): ValidationErrors | null {
    return /^([a-zA-Z]){6}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$|^null$/.test(value) ? null : { invalidSwiftCode: true };
  }


  /**
   * @description 檢查iban格式是否正確
   * @memberof CustomValidator
   * @returns invalidIbanCode or null
   */
  public static ibanCodeValidator(i18n?: string): ValidatorFn {
    return ({ value }: AbstractControl) =>
      /^[a-zA-Z]{2}[A-Za-z0-9]+$|^null$/.test(value?.replace(/ /g, '')) ? null : { invalidIbanCode: i18n || true };
  }

  /**
   * @description 檢查aba格式是否正確
   * @memberof CustomValidator
   * @returns invalidAbaCode or null
   */
  public static abaCodeValidator(i18n?: string): ValidatorFn {
    return ({ value }: AbstractControl) =>
      /^[0-9]{9}$|^null$/.test(value) ? null : { invalidAbaCode: i18n || true };
  }

  /**
   * @description 只允許輸入英文與特定符號
   * @param regularExp 特殊符號正規表達式
   */
  public static englishValidator(regularExp?: string, i18n?: string): ValidatorFn {
    const Exp = `^[a-zA-Z\\s${regularExp}]+$|^null$`;
    return ({ value }: AbstractControl) =>
      new RegExp(Exp).test(value) ? null : { invalidContent: i18n || true };
  }

  /**
   * @description 只允許輸入中文以外內容
   */
  public static chineseExceptValidator({ value }: AbstractControl): ValidationErrors | null {
    return /^[\x20-\x7E]+$|^null$/.test(value) ? null : { invalidContent: true };
  }

  /**
   * @description 只允許輸入數字
   */
  public static numberValidator({ value }: AbstractControl): ValidationErrors | null {
    return /^[0-9]+$|^null$/.test(value) ? null : { invalidContent: true };
  }

}
