export default function App() {
  // event listener function convention name: handleClickLotOfLogic
  const handleClickLotOfLogic = () => {
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
  };

  const handleChangePassword = (event) => {
    console.log('Changed......');
    console.log(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        className="block px-3 py-1.5 border outline-none rounded-lg"
        onChange={handleChangePassword}
      />
      <button
        className="bg-gray-300 p-3"
        onClick={() => {
          console.log('ClickClick');
        }}
      >
        Click
      </button>
      <button className="bg-green-300" onClick={handleClickLotOfLogic}>
        A Lot of logic
      </button>
    </div>
  );
}
