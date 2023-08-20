const OfficerCard = ({title, name, picture}) => {
  return (
    <section>
      <img src={picture} alt={`${name} - ${title}`} />
      <h2>{title}</h2>
      <h3>{name}</h3>
    </section>
  )
}

export default OfficerCard;