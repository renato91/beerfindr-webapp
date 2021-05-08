const ItemList = () => {
  const itemList = [
    {
      id: 1,
      name: "PS4",
    },
    {
      id: 2,
      name: "PS5",
    },
    {
      id: 3,
      name: "PS6",
    },
  ];

  return (
    <ul>
      {itemList && itemList.map((item) => <li key={item.id}>{item.name}</li>)}
    </ul>
  );
};

export default ItemList;
