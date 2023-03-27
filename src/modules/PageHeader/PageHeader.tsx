export type PageHeaderProps = {
  title: string
  description?: string
}

export const PageHeader = ({ title, description }: PageHeaderProps) => {
  return (
    <header className="mb-4">
      <h1 className="text-xl">{title}</h1>
      <p className="text-sm text-gray-400">{description}</p>
    </header>
  )
}
