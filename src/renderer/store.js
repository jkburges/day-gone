export const store = {
    state: {
        workCategories: ["cats", "dogs", "fish"]
    },

    addWorkCategory(newWorkCategory) {
        this.state.workCategories.push(newWorkCategory);
    }
};
