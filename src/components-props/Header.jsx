import Menu from './Menu';

export default function Header() {
  // find hour
  const currentHour = new Date().getHours();
  // const status =
  //   currentHour >= 9 && currentHour < 17 ? 'Currently Open' : 'Already Closed';

  return (
    <header className="flex justify-between bg-gray-300 px-8 py-4">
      <div>Restaurant</div>
      {/* <div>Open: 9.00 - 17.00 {status}</div> */}
      <div>
        Open: 9.00 - 17.00{' '}
        {currentHour >= 9 && currentHour < 17
          ? 'Currently Open'
          : 'Already Cloased'}
      </div>
      <Menu />
    </header>
  );
}
