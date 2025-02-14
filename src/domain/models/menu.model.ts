export interface MenuItem {
  label: string
  href: string
}

export interface MenuModel {
  items: MenuItem[]
  isOpen: boolean
}
