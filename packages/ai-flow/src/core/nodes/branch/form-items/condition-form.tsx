import type { Control, FieldValues, Path } from '@mono-kit/ui/base/form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@mono-kit/ui/base/form'

import { Input } from '@mono-kit/ui/base/input'

interface ConditionFormProps<TFieldValues extends FieldValues = FieldValues> {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
}
function ConditionForm<TFieldValues extends FieldValues = FieldValues>(props: ConditionFormProps<TFieldValues>) {
  const { control, name } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>条件</FormLabel>
          <FormControl>
            <Input className="nodrag" autoComplete="off" placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>描述</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default ConditionForm
