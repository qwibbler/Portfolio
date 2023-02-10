const Card = ({ children, style }) => (
  <div className="card" style={style}>
    <div className="card-content">
      {children}
    </div>
  </div>
)

export default Card;