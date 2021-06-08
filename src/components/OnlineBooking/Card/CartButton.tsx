import { Button } from "semantic-ui-react";

interface IProps {
    style?: object,
    onClick?: (...args: any[]) => void,
    disabled?: boolean
}

const CartButton: React.FC<IProps> = ({style, onClick, disabled}) => {
  return (
    <Button color="yellow" style={style} onClick={onClick} disabled={disabled}>
      <i
        className="fas fa-cart-plus"
        style={{ fontSize: 20, color: "#1e212d" }}
      />
    </Button>
  );
};

export default CartButton;
