export function DriverCard(props) {
  return (
    <ul>
      <li>{props.name};</li>

      <li>{Math.round(Number(props.rating))};</li>

      <li>
        <img style={{ height: 300 }} src={props.img} alt="#"></img>
      </li>

      <li>{props.car.model};</li>

      <li>{props.car.licensePlate};</li>
    </ul>
  );
}
