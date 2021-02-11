export default function LoadingLine(props) {
  return (
    <div class="d-flex align-items-center">
    <strong>{props.children}</strong>
    <div class="spinner-border ml-3" role="status" aria-hidden="true"></div>
  </div>
  );
}
