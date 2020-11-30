import item from './item.js';

const items = [];
const hideCheckedItems = false;

const findById = function(id) {
    const item = items.find(e => e.id === id);
    return item;
};

const addItem = function(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    }
    catch(error) {
        console.log(`Cannot add item: ${error.message}`);
    }
};

const findAndToggleChecked = (id) => {
    let found = findById(id);
    found.checked= !found.checked;
};

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(newName);
        let found = findById(id);
        found.name = newName;
    }   
    catch(error) {
        console.log(`Cannot update name: ${error.message}`);
    }
};

const findAndDelete = function(id) {
    let foundItem = findById(id);
    let index = items.findIndex(o => o.id === foundItem.id);
    items.splice(index, 1);
};

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
    items,
    hideCheckedItems,
    findAndDelete,
    findAndUpdateName,
    findAndToggleChecked,
    addItem,
    findById,
    toggleCheckedFilter
};
