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
          'block text-[14px] w-full  text-grey border border-extra-light-grey px-3 py-4  focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50',
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
