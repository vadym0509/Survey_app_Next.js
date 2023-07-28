import ResultsList from "@/components/forms/ResultsList"

export default function Page({ params }: {
  params: { formId: number}
}) {
  return(
    <div>
      <ResultsList />
    </div>
  )
}
