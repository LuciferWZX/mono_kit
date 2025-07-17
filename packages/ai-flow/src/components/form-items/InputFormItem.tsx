import type { Control, FieldValues, Path } from '@mono-kit/ui/base/form'
import type { ComponentProps } from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@mono-kit/ui/base/form'
import { Input } from '@mono-kit/ui/base/input'

interface InputFormItemProps<TFieldValues extends FieldValues = FieldValues> extends ComponentProps<'input'> {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
  label?: string
  description?: string
}
export function InputFormItem<TFieldValues extends FieldValues = FieldValues>(props: InputFormItemProps<TFieldValues>) {
  const { control, name, label, description } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input className="nodrag" autoComplete="off" placeholder="shadcn" {...field} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputFormItem
