const Product = (props: any) => {
  const name = props.name;

  return (
    <div className="product-card" onClick={() => props.selectProduct(name)}>
      <p>{name}</p>
    </div>
  );
};

export default Product;
