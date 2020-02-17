export const fetchBarns = farmId => {
  return fetch(`${process.env.FARM_API}/farms/${farmId}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};
