import { groq } from 'next-sanity'

export const heroQuery = groq`*[_type == "hero"][0] {
  tag {
    text
  },
  title,
  description,
  stats {
    projects {
      value,
      label
    },
    offices {
      value,
      label
    },
    revenue {
      value,
      label,
      suffix
    }
  }
}`
