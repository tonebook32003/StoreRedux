import { createStore } from 'https://cdn.skypack.dev/redux';
const initState = 0;
function Reducer(state = initState, action){
    switch(action.type){
        case 'DEPOSITE':
            return state + action.payload;
        case 'WITHDRAW':
            return state - action.payload;
        default:
            return state;
    }
}
//Store
const store = window.store = createStore(Reducer);

// Actions
function actionDeposite(payload){
    return{
        type: 'DEPOSITE',
        payload
    }
}
function actionWithdraw(payload) {
    return {
        type: 'WITHDRAW',
        payload
    }
}
// DOM Events
const deposite = document.querySelector('#deposite')
const withdraw = document.querySelector('#withdraw')
// Events handler
deposite.onclick = function(){
    store.dispatch(actionDeposite(
        Math.floor(Math.random() * 101)
    ));
} 
withdraw.onclick = function () {
    store.dispatch(actionWithdraw(
        Math.floor(Math.random() * 101)
    ));
}
// Listener 
store.subscribe(() => {
    Render();
})
// Render 
function Render(){
    const output = document.querySelector('#output');
    output.innerText = store.getState();
}
Render();
