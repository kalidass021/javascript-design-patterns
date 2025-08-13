// singleton pattern
// only one instance of something is created and reused everywhere
// only one object is creacted and reused everywhere

const singleton = (() => {
    let instance;

    return {
        getInstance: () => {
            if (!instance) {
                instance = { name: `I'm the only one...`};
            }

            return instance;
        }
    }
})();

const a = singleton.getInstance();
const b = singleton.getInstance();

console.log(a === b);