import { IInput } from '@/src/types';
import { DatePicker } from '@nextui-org/date-picker';
import { Controller, useFormContext } from 'react-hook-form';

interface IProps extends IInput {}

const FXDatePicker = ({ label, name }: IProps) => {
  useFormContext();

  return (
    <Controller
      name={name}
      render={({ field: { value, ...fields } }) => (
        <DatePicker className="min-w-full sm:min-w-[225px]" label={label} {...fields} />
      )}
    />
  );
};

export default FXDatePicker;
