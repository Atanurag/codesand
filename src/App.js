import "./styles.css";

import { add } from ".././redux/action";

import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  const lists = useSelector((e) => e.changeTheNumber.list);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(add({ nam: "hellodear" }));
        }}
      >
        zz
      </button>
      {lists.map((e, i) => {
        return <p key={i}>{e.nam}</p>;
      })}
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
