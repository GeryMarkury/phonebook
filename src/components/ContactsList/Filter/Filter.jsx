import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export function Filter() {
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

return (
    <label>Find contacts by name: <input type="text" value={filter} onChange={(event)=>dispatch(setFilter(event.currentTarget.value))} /></label>
);
}
