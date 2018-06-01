const App = () => {
  return (
    <div>
      <h1>Hello from React</h1>
      {/* <Copyright name="BIT" /> */}
    </div>
  );
};

const rootElement = document.getElementById ('root');
ReactDOM.render (<App />, rootElement);
