import './List.css';
import ListItemAction from './ListItemAction';

const ListItem = ({ data }) => {
  return (
    <div className="listitem">
      {/* Iteramos sobre las claves y valores del objeto 'data' */}
      {Object.keys(data).map((key, index) => (
        <div key={index} className={`col-${key}`}>
          {data[key]}
        </div>
      ))}

      <div className="col-acciones">
        <ListItemAction className='list-item-action'/>
      </div>
    </div>
  );
};

export default ListItem;
