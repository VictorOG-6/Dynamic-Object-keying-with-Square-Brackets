const state = {
    loading: true,
    name: '',
    job: '',
}

function updateState (key, value){
    state[key] = value
}

updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', 'false');
console.log(state);