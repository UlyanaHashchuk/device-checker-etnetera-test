import fetch from 'isomorphic-fetch'
import { authLocalStorage } from '~/constants'

type Props = {
  url: string
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
} & Record<string, any>

export const request = <T>({ url, method, ...restProps }: Props) => {
  const { token } = authLocalStorage.get()

  return new Promise<T>((resolve, reject) => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH}/${url}`, {
      method,
      headers: {
        ...(token
          ? {
              'Auth-Token': token,
            }
          : {}),
        'Content-Type': 'application/json',
      },
      ...restProps,
    })
      .then((response) =>
        response
          .json()
          .then((data) => (data.error ? reject(data.error) : resolve(data)))
          .catch(reject)
      )
      .catch(reject)
  })
}
