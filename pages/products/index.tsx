import useSWR from 'swr';
const productsEndpoint = 'https://6361e75a7521369cd06069d5.mockapi.io/products';

const fetcher = async () => {
  const response = await fetch(productsEndpoint);
  return await response.json();
};
const postProduct = async () => {
  await fetch(productsEndpoint, {
    method: 'POST',
    body: null,
  });
};
const TodoApp = () => {
  const {data: products} = useSWR(productsEndpoint, fetcher, {
    refreshInterval: 1000,
  });
  const handleAdd = async () => {
    await postProduct();
  };
  const handleDelete = (id: string) => {
    return async () => {
      await fetch(productsEndpoint + '/' + id, {
        method: 'DELETE',
      });
    };
  };
  return (
    <div>
      <button onClick={handleAdd}>Add product</button>
      {products &&
        products.map((product: any) => (
          <div key={product.id}>
            {product.name} - ${product.price}
            <button style={{marginLeft: 20}} onClick={handleDelete(product.id)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
export default TodoApp;
