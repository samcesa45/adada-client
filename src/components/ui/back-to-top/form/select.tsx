import type { UseFormRegisterReturn } from 'react-hook-form';
import {
  FieldWrapper,
  type FieldWrapperPassThroughProps,
} from './field-wrapper';
import { cn } from '@/lib/utils';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = FieldWrapperPassThroughProps & {
  options: Option[];
  className?: string;
  defaultValue?: string;
  registration: Partial<UseFormRegisterReturn>;
};
export const Select = (props: SelectFieldProps) => {
  const { label, options, error, className, defaultValue, registration } =
    props;

  return (
    <FieldWrapper label={label} error={error}>
      <select
        className={cn(
          'block text-[14px] w-full rounded-md  text-black border border-navyblue px-3 py-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-navyblue disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        defaultValue={defaultValue}
        {...registration}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
    </FieldWrapper>
  );
};
