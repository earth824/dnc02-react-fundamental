import RoomCard from './RoomCard';

export default function RoomList() {
  const rooms = [
    { id: 1, no: 201, person: 2, price: 6000 },
    { id: 2, no: 202, person: 4, price: 11000 }
  ];

  return (
    <div className="flex gap-4 mt-6">
      {rooms.map((room) => (
        <RoomCard {...room} key={room.id} />
      ))}
    </div>
  );
}
