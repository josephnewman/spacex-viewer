import React, { useState, useEffect } from 'react';
import Api from '../../services/Api';

export function SpacecraftFetch({ url, render }) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  useEffect(() => {
    Api.get(url)
      .then((res) => setData(res.data))
      .catch(() => setError(true));
  }, [url]);

  if (error) {
    return (
      <article data-qa="fetch-erorr-message" className="message is-danger">
        <div className="message-body">
          <h1>Uh oh! Something went wrong fetching {url} :(</h1>
        </div>
      </article>
    );
  } else if (!!data) {
    return render(data);
  } else {
    return (
      <div>
        <img data-qa="fetch-loading" src="./pulse.svg" alt="loading" />
      </div>
    );
  }
}
