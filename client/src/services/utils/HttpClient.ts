import { CardProps } from '../../components/Card'
import APIError from '../../errors/ApiError'
import delay from '../../utils/delay'

type HttpClientProps = {
  get: (path: string) => Promise<CardProps[]>
  post: (path: string, body: CardProps) => Promise<CardProps>
}

function createHttpClient(baseURL: string): HttpClientProps {
  async function get(path: string): Promise<CardProps[]> {
    await delay(500)
    const response = await fetch(`${baseURL}${path}`)

    let body = null
    const contentType = response.headers.get('Content-Type')

    if (contentType?.includes('application/json')) {
      body = await response.json()
    }

    if (response.ok) {
      return body
    }

    throw APIError(response, body)
  }

  async function post(path: string, body: CardProps): Promise<CardProps> {
    await delay(500)

    const headers = new Headers({
      'Content-Type': 'application/json'
    })

    const response = await fetch(`${baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers
    })

    let responseBody = null
    const contentType = response.headers.get('Content-Type')

    if (contentType?.includes('application/json')) {
      responseBody = await response.json()
    }

    if (response.ok) {
      return responseBody
    }

    throw APIError(response, responseBody)
  }

  return {
    get,
    post
  }
}

export default createHttpClient
