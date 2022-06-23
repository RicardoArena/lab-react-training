import { Rating } from '../Rating';

export function DriverCard(props) {
  return (
    <>
      <div
        style={{
          'background-color': 'royalblue',
          color: 'white',
          display: 'flex',
          gap: '10px',
          margin: '25px',
          padding: '25px',
          'justify-content': 'center',
        }}
      >
        <img
          src={props.img}
          style={{ width: '150px', 'border-radius': '2000px' }}
        />
        <div>
          <h2>{props.name}</h2>
          <Rating>{props.rating}</Rating>
          <p>
            {props.car.model} - {props.car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
}
