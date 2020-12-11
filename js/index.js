import {
    initialState, GET_COUNTRIES, getCountries, countryReducer
} from './store/country/index.js';

const thunk_middleware = ReduxThunk.default;

// Create a new Redux store with the `createStore` function,
const applyMiddleware = Redux.applyMiddleware;
const store = Redux.createStore(countryReducer, applyMiddleware(thunk_middleware));



//fetch country information from API
function fetchData() {
    return async function (dispatch) {
        const response = await fetch("https://restcountries.eu/rest/v2/all")
        const data = await response.json();
        dispatch(getCountries(data))
    }
}


async function render() {
    await store.dispatch(fetchData());
    const state = store.getState();
    state.countries.map(item => {
        generateCard(item.name, item.flag)
    })

    // console.log('the state at render: ', state)
}

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
unsubscribe();


//generate card per country
function generateCard(name, flag) {
    console.log('in generate card')
    const container = document.getElementById('container');
    var cardContainer = document.createElement('div');
    var cName = document.createElement('h3');
    var image = document.createElement('img');

    cName.innerHTML = name;
    image.src = flag;

    cardContainer.classList.add('card');
    cardContainer.appendChild(cName);
    cardContainer.appendChild(image);

    container.appendChild(cardContainer);

}
