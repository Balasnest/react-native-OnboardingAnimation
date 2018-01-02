import {observable} from 'mobx';

let index = 0;

class ObservableListStore {
	@observable list = []

	addListItem (item) {
		 this.list.push({
		 	name: item,
		 	items: [],
		 	index
		 })
		 index++
	}

	removeListItem (item) {
		this.list = this.list.filter((l) => {
			return l.index !== item.index
		})
	}

	addItem(item, name) {
		this.list.forEach((l) => {
			if(l.index === item.index)
				l.items.push(name)
		})
	}
}

const obervableListStore = new ObservableListStore()
export default observableListStore

// Initialization:
// constructor

// ===============
// Mounting:

// componentWillMount(){}

// render(){} is a pure method which means its same output every time the same input is provided.

// componentDidMount(){}

// ===============
// updation:

// ShouldComponentUpdate(){} this method return true or false and 
// Re-rendering or it can skip rendering

// componentWillUpdate(){} is executed only after the ShouldComponentUpdate returns true.
// componentDidUpdate(){}

// Props:
// componentWillRecieveProps
// =================
// Unmounting:
// componentWillUnmount() {}


// async/await - the entire foundation for async/await is promise. In every async function 
// will return a promise and every single thing we await will be a promise.


// Promise - is javascript object which contain another object. We access the data using '.then()' and 
// we catch the errors from a promise chain using '.catch()'

// await instead of .then. Without requiring any callback function
// For catching errors, we can use try/catch













