import PropTypes from 'prop-types'
// eslint-disable-next-line react/prop-types
const LabView = ({lab}) => {
  return (
    <div className="w-[95%]  mt-5">
      <div className="">
        <h1>{lab.name}</h1>
      </div>
    </div>
  );
}
LabView.propTypes = {
  lab: PropTypes.object
}
export default LabView