interface VRProps {
  id?: string;
}

const VR = ({ id }: VRProps) => {
  return <div id={id}>VR Page</div>;
};

VR.displayName = "VR";
export default VR;
