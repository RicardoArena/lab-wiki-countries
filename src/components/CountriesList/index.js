import { Link } from 'react-router-dom';

export function CountriesList(props) {
  const { country } = props;

  return (
    <>
      <div className="row">
        <div
          className="col-9"
          style={{ 'max-height': '90vh', overflow: 'scroll' }}
        >
          <div className="list-group">
            {country.map((element) => {
              return (
                <Link
                  to={`/${element.alpha3Code}`}
                  className="list-group-item list-group-item-action"
                >
                  <img
                    src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                  />
                  <h3>{element.name.common}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
