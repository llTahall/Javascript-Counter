let counter = 0;
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resetButton = document.getElementById('reset');
    const saveButton = document.getElementById('save');
    const loadButton = document.getElementById('load');
    let number = document.getElementById('number');

    const incrementValue = () => {
        counter++;
        number.textContent = counter;
    }
    const decrementValue = () => {
        if (counter > 0) {
            counter--;
            number.textContent = counter;
        }
    }
    const resetValue = () => {
        localStorage.removeItem('counter');
        counter = 0;
        number.textContent = counter;

    }
    const saveValue = () => {
        localStorage.setItem('counter', counter);
        alert('Value Saved');
    }
    const loadValue = () => {
        counter = localStorage.getItem('counter');
        if (counter != null) {

            number.textContent = counter;
        }
        else {
            alert('No Value To Load');
        }
    }


    incrementButton.addEventListener("click", incrementValue);
    decrementButton.addEventListener("click", decrementValue);
    resetButton.addEventListener("click", resetValue);
    saveButton.addEventListener("click", saveValue);
    loadButton.addEventListener("click", loadValue);