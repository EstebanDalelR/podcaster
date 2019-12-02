const Field = ({ title, description, name, fieldValue, handleChange }) => {
  return (
    <div className={name}>
      <h3>{title}</h3>
      <p>{description}</p>
      <input
        type="text"
        name={name}
        value={fieldValue}
        onChange={handleChange}
      />
    </div>
  )
}
export default Field