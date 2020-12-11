const GET_COUNTRIES = 'GET_COUNTRIES';

const getCountries = (countries) => {
    return {
        type: GET_COUNTRIES,
        payload: countries
    }
}



export { GET_COUNTRIES, getCountries }