import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { formatDate1 } from 'src/app/helpers/format-dates.helper';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(date: string, format: string = 'DDMMYYYY'): string {

    
    /**Check if input date is valid and get delimeter used 
     * Example : new Date('dd/mm/yyyy') is invalid
     * 
    */

    const result = formatDate1(date, format)
    return result

  //   const isDateValid = moment(date).isValid();
  //   const isFormatHyphen = date.toString().indexOf('.')
  //   let inputDateFormat;
  //   let dateSpr = '';
  //   if(isFormatHyphen > 0 ) {
   
  //    dateSpr = '.'
  //   }
  //   if (isDateValid) {

  //     inputDateFormat = moment(date).format(format.toUpperCase())
  //   }
  //   else {

  //     // inputDateFormat = this.toDate(date,dateSpr)
  //     inputDateFormat = (dateStr, dateSpr)=>{
  //       const [day, month, year] = dateStr.split(dateSpr)
  //       return new Date(year, month - 1, day)
  //     }
  //     inputDateFormat = moment(inputDateFormat).format(format.toUpperCase())

  //   }

  //   return inputDateFormat;
  // }

  // toDate(dateStr,dateSpr) {

  //   const [day, month, year] = dateStr.split(dateSpr)
  //   return new Date(year, month - 1, day)

  // }
}
}
