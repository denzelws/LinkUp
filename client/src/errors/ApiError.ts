interface Response {
  status: number
  statusText: string
  body: any
}

interface APIError {
  name: string
  response: Response
  body: Response['body']
  message: string
}

export default function createAPIError(
  response: Response,
  body: Response['body']
): APIError {
  const error: APIError = {
    name: 'Api Error',
    response: response,
    body: body,
    message: body?.error || `${response.status} - ${response.statusText}`
  }

  return error
}
