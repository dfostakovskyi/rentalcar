// src/locales/customEn.js

import { enUS } from "date-fns/locale/en-US";
import { registerLocale } from "react-datepicker";

const customEn = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n],
    dayShort: (n) => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][n],
  },
};

registerLocale("customEn", customEn);

export default customEn;
