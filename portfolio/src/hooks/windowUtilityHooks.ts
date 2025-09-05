import { useEffect, useState } from "react";
import lodash from "lodash";
export function useWindowBreakpointValue<T>(values: { base: T; sm?: T; md?: T; lg?: T; xl?: T }): T {
  const [value, setValue] = useState<T>(values.base);

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1280 && !lodash.isUndefined(values.xl)) setValue(values.xl);
      else if (width >= 1024 && !lodash.isUndefined(values.lg)) setValue(values.lg);
      else if (width >= 768 && !lodash.isUndefined(values.md)) setValue(values.md);
      else if (width >= 640 && !lodash.isUndefined(values.sm)) setValue(values.sm);
      else setValue(values.base);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [values]);
  return value;
}

