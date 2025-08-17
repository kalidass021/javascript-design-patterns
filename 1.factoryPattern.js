// factory pattern

// a function that creates different types of objects based on input

const createuser = (name, role) => {
  const base = { name };

  const roles = {
    admin: () => ({ role: 'Admin', permissions: 'all' }),
    guest: () => ({ role: 'Guest', permissions: 'read-only' }),
  };

  //   return {...base, ...(roles[role]?.() || {})}
  return Object.freeze({
    ...base,
    ...(roles[role] && roles[role]?.()),
  });
};

console.log(createuser('Kalidass', 'admin'));
