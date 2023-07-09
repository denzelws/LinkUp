import { CardProps } from '../../components/Card'

const ContactMapper = {
  toPersistance: (domainContact: CardProps) => {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId
    }
  },

  toDomain: (persisentenceContact: CardProps) => {
    return {
      id: persisentenceContact.id,
      name: persisentenceContact.name,
      email: persisentenceContact.email,
      phone: persisentenceContact.phone,
      categoryId: persisentenceContact.category_id,
      category_name: persisentenceContact.category_name
    }
  }
}

export default ContactMapper
