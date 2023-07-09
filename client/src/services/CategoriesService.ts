import CategoryMapper from './mappers/CategoryMapper'
import createHttpClient from './utils/HttpClient'

export type CategoriesProps = {
  id: string
  name: string
}

const categoriesService = {
  httpClient: createHttpClient('http://localhost:3333'),

  async listCategories(): Promise<CategoriesProps[]> {
    const categories = await this.httpClient.get('/categories')
    return (categories as CategoriesProps[]).map(CategoryMapper.toDomain)
  }
}

export default categoriesService
