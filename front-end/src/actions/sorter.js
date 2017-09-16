/******************************************************************/
/******************************************************************/
/*****************            Sorter          *********************/
/******************************************************************/
/******************************************************************/

import {
  SORT,
  SHOW_SORTER_OPTIONS,
} from './type'

export function sort (sorter, opt) {
  return {
    type: SORT,
    sorter,
    opt,
  }   
}

export function showSorterOptions (sorter, opt) {
  return {
    type: SHOW_SORTER_OPTIONS,
    sorter,
    opt,
  }
}

