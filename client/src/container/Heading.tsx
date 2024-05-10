function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-center text-xl font-semibold md:text-3xl text-blue-600 mt-5">
      { children }
    </h1>
  )
}

export default Heading