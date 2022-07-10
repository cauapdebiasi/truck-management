import DetailCard from "./DetailCard"

const Details: React.FC = () => {
  return (
    <>
        <DetailCard identifier="frota"/>
        <DetailCard identifier="placa" />
        <DetailCard identifier="modelo" />
        <DetailCard identifier="ultimaAlteracao" />
    </>
  )
}

export default Details
