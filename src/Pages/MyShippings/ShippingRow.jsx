
const ShippingRow = ({ ship }) => {
    const {parcelName, destination, image, distanceCost, floorCost, parcelType, pickUpCost, totalCost} = ship;
    return (
        <tr>
            <th>
                <img className="h-12 w-12 rounded-full" src={image?.image} alt="" />
            </th>
            <td>{parcelName}</td>
            <td>{destination}</td>
            <td>{parcelType}</td>
            <td>$ {floorCost}</td>
            <td>$ {pickUpCost}</td>
            <td>$ {distanceCost}</td>
            <td>$ {totalCost}</td>
        </tr>

    );
};

export default ShippingRow;