import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { Button, Input } from '~/ui'
import messages from '../../index.messages'

type FormValues = {
  email: string
  password: string
}

const Form = () => {
  const { formatMessage } = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    console.log('submit: ', values)
    setIsLoading(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <Input
        name="email"
        register={register}
        placeholder={formatMessage(messages.namePlaceholder)}
        hasError={!!errors?.email}
        required
      />
      <Input
        name="password"
        type="password"
        register={register}
        placeholder={formatMessage(messages.passwordPlaceholder)}
        hasError={!!errors?.password}
        required
        className="mt-4 mb-7"
      />
      <Button secondary filled disabled={isLoading}>
        {formatMessage(isLoading ? messages.processing : messages.submitButton)}
      </Button>
    </form>
  )
}

export default Form
