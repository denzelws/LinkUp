import { CategoriesProps } from '../CategoriesService'

const CategoryMapper = {
  toDomain: (persisentenceCategory: CategoriesProps) => {
    return {
      id: persisentenceCategory.id,
      name: persisentenceCategory.name
    }
  }
}

export default CategoryMapper
