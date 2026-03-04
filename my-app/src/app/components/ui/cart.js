export default async function Cart() {
    const items = [
        { id: 1, name: "course name", price: 49 },
        { id: 2, name: "course name 2", price: 29 },
    ];

    const total = items.reduce((sum, item) => sum + item.price, 0);

    return (
        <div>Your cart</div>
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    {item.name}
                     {item.price}
                </li>
            ))}
        </ul>
        <p>Total: £{total}</p>
    );
}