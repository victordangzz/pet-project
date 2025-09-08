export type BenefitItemProps = {
  icon: string // URL của ảnh
  text: string
  active?: boolean
  onClick: () => void
}

export interface BenefitSlide {
  img: string
  caption: string
  benefit: string
  icon: string
}
