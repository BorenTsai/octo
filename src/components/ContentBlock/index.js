import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import HomeContentBlock from "./HomeContentBlock";


const ContentBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type == "home") return <HomeContentBlock {...props} />;
  return null;
};

export default ContentBlock;
