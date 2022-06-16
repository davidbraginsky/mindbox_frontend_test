import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Todo = ({ todo }) => {
  return <FormControlLabel control={<Checkbox />} label={todo} />;
};

export default Todo;
