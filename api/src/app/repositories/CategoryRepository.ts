import { db } from '../../database'

export type CategoryProps = {
  id: string
  name: string
}

export const CategoryRepository = {
  async findAll(orderBy: 'ASC' | 'DESC'): Promise<CategoryProps[]> {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = db.query(`
    SELECT * FROM categories ORDER BY name ${direction}
    `)

    return rows
  },
  async create({ name }: CategoryProps) {
    const [row] = await db.query(
      `
    INSERT INTO categories(name)
    VALUES($1)
    RETURNING *
    `,
      [name]
    )

    return row
  }
}
