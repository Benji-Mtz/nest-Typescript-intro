// import { pokemons } from './bases/02-objects';
// import { name } from './bases/01-types';
// import { charmander } from './bases/03-classes';
import { charmander } from './bases/04-injection';

import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Hello ${ charmander.name }! - ${ charmander.id }</h1>
  <a href="https://www.typescriptlang.org/" target="_blank">Documentación</a>
`;
