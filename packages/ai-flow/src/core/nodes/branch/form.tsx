import { Form, useForm } from '@mono-kit/ui/base/form'
import { memo } from 'react'
import ConditionForm from './form-items/condition-form'

function BranchForm() {
  const form = useForm({
    defaultValues: {
      conditions: [],
    },
  })
  const onSubmit = (data: any) => {
    console.warn('[BranchForm:onSubmit]', data)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <ConditionForm control={form.control} name="conditions" />
      </form>
    </Form>
  )
}

export default memo(BranchForm)
