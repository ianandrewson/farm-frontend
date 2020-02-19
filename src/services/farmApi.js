const request = (path, method, body) => {
  return fetch(`${process.env.FARM_API}${path}`, {
    method, 
    headers: {
      'Content-Type': 'application/json'
    },
    // credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const fetchBarns = farmId => {
  return request(`/farms/${farmId}`, 'get');
};

const chooseChickenDisplay = () => {
  const result = Math.random();
  if(result > .5) return '🐔';
  else return '🐓';
};

const chooseCowDisplay = () => {
  const result = Math.random();
  if(result > .5) return '🐮';
  else return '🐄';
};

const choosePigDisplay = () => {
  const result = Math.random();
  if(result > .5) return '🐷';
  else return '🐖';
};

export const newBarn = (barnType) => {
  return request('/barns', 'post', {
    barnType,
    maxSize: barnSizes[barnType],
    animals: []
  });
};

export const newChicken = barnId => {
  return request('/animals', 'post', {
    barnId,
    species: 'chicken',
    age: 0,
    maxAge: 5,
    display: chooseChickenDisplay()
  });
};

export const newCow = barnId => {
  return request('/animals', 'post', {
    barnId,
    species: 'cow',
    age: 0,
    maxAge: 20,
    display: chooseCowDisplay()
  });
};

export const newPig = barnId => {
  return request('/animals', 'post', {
    barnId,
    species: 'pig',
    age: 0,
    maxAge: 15,
    display: choosePigDisplay()
  });
};

const barnSizes = {
  chicken: 50,
  pig: 25,
  cow: 12
};
