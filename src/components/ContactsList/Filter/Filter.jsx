import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";

export function Filter() {
    const filter = useSelector(state => state.filter);

    const dispatch = useDispatch();

return (
    <label>Find contacts by name: <input type="text" value={filter} onChange={(event)=>dispatch(setFilter(event.currentTarget.value))} /></label>
);
}
