import Coursework from "../coursework/Coursework";
import Students from "../students/Students";
import Forum from "../forum/Forum";

function View(props) {
  if (props.state.view === "Coursework") {
    return (
      <Coursework
        onRemove={props.onRemove}
        onSubmit={props.onSubmit}
        onShow={props.onShow}
        state={props.state}
      />
    );
  } else if (props.state.view === "Students") {
    return <Students />;
  } else if (props.state.view === "Forum") {
    return <Forum></Forum>;
  }
}

export default View;
