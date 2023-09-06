
export default {
    fetchPeopleURL: 'https://randomuser.me/api/?results=1000',
    fetchPeople: (...args) => fetch(...args).then((res) => res.json()),
    fetchDebounce: 5
}