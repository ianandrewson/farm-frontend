export function fetchBarns() {
  return Promise.resolve([
    { _id: '1234', type: 'pig', animals: ['pig', 'pig'] },
    { id: '2345', type: 'cow', animals: ['cow', 'cow'] }
  ]);
}
