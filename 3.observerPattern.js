// observer pattern
// one object notifies others when something changes

const createObservable = () => {
  const observers = [];

  return {
    subscribe: (fn) => observers.push(fn),
    notify: (msg) => observers.forEach((fn) => fn(msg)),
  };
}

const news = createObservable();
news.subscribe(msg => console.log('Listener 1', msg));
news.subscribe(msg => console.log('Listener 2', msg));

news.notify('Hello Observers');

