export const CardMenuButton = (props) => {
  return (
    <div class="cursor-pointer" onClick={props.onClick}>
      {props.children}
    </div>
  );
};
