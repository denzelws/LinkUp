import { CardProps } from '../../components/Card'
import APIError from '../../errors/ApiError'
import delay from '../../utils/delay'

type HttpClientProps = {
  get: (path: string) => Promise<CardProps[]>
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

  return {
    get
  }
}

export default createHttpClient
