
const ShippingRow = ({ ship }) => {
    const {ParcelName,quantity, destination, image, distanceCost, floorCost, parcelType, pickUpCost, totalCost} = ship;
    return (
        <tr>
            <th>
                <img className="h-12 w-12 rounded-full" src={image} alt="" />
            </th>
            <td>{ParcelName}</td>
            <td>{destination}</td>
            <td>{parcelType}</td>
            <td>{quantity}</td>
            <td>{floorCost}  &#2547;</td>
            <td>{pickUpCost}  &#2547;</td>
            <td>{distanceCost}  &#2547;</td>
            <td>{totalCost}  &#2547;</td>
        </tr>

    );
};

export default ShippingRow;