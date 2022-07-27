import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { Button, Input } from '~/ui'
import useAuthentication, {
  SignInFormValues,
} from '~/auth/hooks/useAuthentication'
import messages from '../../index.messages'

type Props = {
  setHasError: (prop: boolean) => void
}

const Form = ({ setHasError }: Props) => {
  const { formatMessage } = useIntl()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>()
  const [isLoading, setIsLoading] = React.useState(false)
  const { signIn } = useAuthentication()

  const onSubmit: SubmitHandler<SignInFormValues> = (values) => {
    setIsLoading(true)

    signIn({
      values,
      onError: () => {
        setHasError(true)
        setIsLoading(false)
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
      <Input
        name="login"
        register={register}
        placeholder={formatMessage(messages.namePlaceholder)}
        hasError={!!errors?.login}
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
