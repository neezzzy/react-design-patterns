export const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
};

export const Button = ({ text, color, ...props }) => {
  return <button style={{ backgroundColor: color }}>{text}</button>;
};

export const DangerButton = partiallyApply(Button, {
  color: "red",
  text: "danger button",
});
