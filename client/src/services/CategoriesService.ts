import createHttpClient from './utils/HttpClient'

export type CategoriesProps = {
  id: string
  name: string
}

const categoriesService = {
  httpClient: createHttpClient('http://localhost:3333'),

  async listCategories(): Promise<CategoriesProps[]> {
    return this.httpClient.get('/categories')
  }
}

export default categoriesService
