export default function ErrorList(props) {
  return (
    <div className="text-danger">
      <ul>{props.erros.map((err, index) => <li key={index}>{err}</li>)}</ul>
    </div>
  );
}
