import delay from '../utils/delay'

export default async function listContacts(orderBy = 'asc') {
  const response = await fetch(
    `http://localhost:3333/contact?orderBy=${orderBy}`
  )

  await delay(500)
  return response.json()
}
