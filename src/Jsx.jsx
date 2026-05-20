function App() {
  const content = (
    <main>
      <h1>Main Content</h1>
      Hello
    </main> // React.createElement('main', {}, React.createElement('h1', {}, 'Main Content'), 'Hello', )
  );

  const name = 'Peter';
  const students = ['Nut', 'Gus', 'Not', 'Dis'];
  const ages = [5, 23, 12, 55];
  const list = [<p>Por</p>, <p>PMink</p>];
  const nullValue = null;
  const obj = { name: 'Boy' };
  // expression: evaluate to final value
  // can display: number, string, array(string, number, jsx), jsx
  // not display: boolean, null, undefined
  // cause error: object
  return (
    // 1. must return single root element
    <div>
      {content}
      {/* <h1 style="font-size: 20px; color: red">This is my first React Website</h1> */}
      <h1 style={{ fontSize: '20px', color: 'red' }}>
        This is my first React Website
      </h1>
      <p>Welcome to my place: {name}</p>
      <h3>{6 + 9 + 15 + 21}</h3>
      <form name={obj}>
        {/* 2. Always close tag */}
        <label htmlFor="test">Email</label>
        <input type="text" className="px-3 py-1.5"></input>
        <input type="text" id="test" />
        <br />
        {/* 3. camelCase */}
        <button onClick={(event) => {}}>Submit</button>
      </form>
      <div>{students}</div>
      <div>{ages}</div>
      {list}
      <h1>nullValue: {nullValue}</h1>
      {true} {false} {undefined}
      {obj.name}
    </div>
  );
}

export default App;

// const btn = document.querySelector('button');
// btn.addEventListener('click', function (event) {});

// background-color, border-left-color
// camelCase: backgroundColor, borderLeftColor ==> variable name, function name, jsx attributes
// PascalCase: BackgroundColor, BorderLeftColor ==> function component, class name
// snake_case: background_color, border_left_color ==> database, table name, column name
// kebab-case: background-color, border-left-color ==> folder name, file name
// USER_ROLE: constant variable

// class UserDetail {}
