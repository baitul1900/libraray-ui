


const Card = (props) => {

    const {data} = props;

    return (
        <div className="card">
            <div className="card-title">{data.id}</div>
            <div className="card-text">{data.text}</div>
        </div>
    );
};

export default Card;