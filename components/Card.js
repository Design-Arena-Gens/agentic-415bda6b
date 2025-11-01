export default function Card({ title, description, href, children }){
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
      {href && (
        <p style={{ marginTop: 12 }}>
          <a className="btn" href={href}>Explore ?</a>
        </p>
      )}
    </div>
  );
}
