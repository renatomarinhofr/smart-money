export const solutionsQuery = `
  *[_type == "solutions"][0] {
    title {
      line1,
      line2
    },
    description,
    checklistItems[] {
      text
    }
  }
`
