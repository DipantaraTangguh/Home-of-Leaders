export const GrayLine = (props) => {
  const { extraClasses } = props;

  return <hr className={`border-t border-gray-300 ${extraClasses}`} />;
};
