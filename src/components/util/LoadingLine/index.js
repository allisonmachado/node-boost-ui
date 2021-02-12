export default function LoadingLine(props) {
  return (
    <div className="d-flex align-items-center">
    <strong>{props.children}</strong>
    <div className="spinner-border ml-3" role="status" aria-hidden="true"></div>
  </div>
  );
}
