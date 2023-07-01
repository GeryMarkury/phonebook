import { FormLabel, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "redux/filterSlice";
import { selectFilter } from "redux/selectors";

export function Filter() {
    const filter = useSelector(selectFilter);

    const dispatch = useDispatch();

    return (
        <>
        <FormLabel>Find contacts by name: </FormLabel>
            <Input variant="nameForm" type="text" value={filter} onChange={(event) => dispatch(setFilter(event.currentTarget.value))} ></Input>
</>
);
}
