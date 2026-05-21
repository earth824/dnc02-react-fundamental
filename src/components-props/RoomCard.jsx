export default function RoomCard(props) {
  return (
    <div className="border p-4">
      <h3>{props.no}</h3>
      <p>{props.person} Person</p>
      <span>{props.price}</span>
    </div>
  );
}
