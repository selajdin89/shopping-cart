import { Button, Form } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filters = () => {
  const {
    prodState: { byStock, byFastDelivery, byRating, sort },
    prodDispatch,
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          name="group-1"
          label="Ascending"
          type="radio"
          id={"inline-1"}
          onChange={() =>
            prodDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          name="group-1"
          label="Descending"
          type="radio"
          id={"inline-2"}
          onChange={() =>
            prodDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          name="group-1"
          label="Include Out of Stock"
          type="checkbox"
          id={"inline-3"}
          onChange={() => prodDispatch({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          name="group-1"
          label="Fast Delivery Only"
          type="checkbox"
          id={"inline-4"}
          onChange={() => prodDispatch({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: 10 }}>Rating:</label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            prodDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        variant="light"
        onClick={() => prodDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
