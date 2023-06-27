import { CardProps } from '../../components/Card'
import APIError from '../../errors/ApiError'
import delay from '../../utils/delay'

type HttpClientProps = {
  get: (path: string, options?: OptionsProps) => Promise<CardProps[]>
  post: (path: string, options?: OptionsProps) => Promise<CardProps>
}

type OptionsProps = {
  method?: string
  body?: CardProps
  headers?: { [key: string]: string }
}

function createHttpClient(baseURL: string): HttpClientProps {
  function get(path: string, options: OptionsProps = {}): Promise<CardProps[]> {
    return makeRequest(path, {
      method: 'GET',
      headers: options.headers
    })
  }

  function post(path: string, options: OptionsProps = {}): Promise<CardProps> {
    return makeRequest(path, {
      method: 'POST',
      ...options
    })
  }

  async function makeRequest(path: string, options: OptionsProps) {
    await delay(500)

    const headers = new Headers()

    if (options.body) {
      headers.append('Content-Type', 'application/json')
    }

    if (options.headers) {
      Object.entries(options.headers).forEach(([name, value]) => {
        headers.append(name, value)
      })
    }

    const response = await fetch(`${baseURL}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
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
