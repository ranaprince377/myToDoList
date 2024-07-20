
const ListItem = ({item, removeItem, toggleItemCompleted}) => {

    return (
        <>
            <li className={`${item.completed? `danger`: ``}`}>
                <div className="checkbox">
                    <span className="close" onClick={() => removeItem(item.id)}><i className="fa fa-times"></i></span>
                    <label>
                        <span className="checkbox-mask"></span>
                        <input type="checkbox" onChange={() => toggleItemCompleted(item.id)} />
                        {item.text}
                    </label>
                </div>
            </li>
        </>
    )
}

export default ListItem