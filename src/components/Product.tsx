const Product = (props: any) => {
  const name = props.name;

  return <div className="product-card"><p>{name}</p></div>;
};

export default Product;
