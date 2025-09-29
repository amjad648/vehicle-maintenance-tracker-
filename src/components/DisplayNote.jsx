export default function DisplayNote ({text}) {
  return (
    (<div className="ms-5 mt-5 w-75 pt-5 d-flex row">
      <h1 className="fw-semibold text-secondary">{text}</h1>
     </div>)
  )
}