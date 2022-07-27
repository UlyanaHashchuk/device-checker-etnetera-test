import fetch from 'isomorphic-fetch'

type Props = {
  url: string
  method: 'GET' | 'POST' | 'DELETE' | 'PUT'
  toke?: string
} & Record<string, any>

export const request = <T>({ url, method, token, ...restProps }: Props) =>
  new Promise<T>((resolve, reject) => {
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
