import './List.css';

const ListHead = ({ heads }) => {
  return (
    <div className="listhead">
      {heads.map((head, index) => (
        <div key={index} className={`col-${index}`}>
          {head}
        </div>
      ))}
      <div className="col-acciones">Acciones</div>
    </div>
  );
};

export default ListHead;
