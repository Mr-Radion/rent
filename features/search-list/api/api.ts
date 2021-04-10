export default {
  get: (): any => fetch(`http://localhost:5000/search${'ключевые слова'}`),
  // get: (props: string): any => fetch(`http://localhost:5000/search${props.query}`),
};
