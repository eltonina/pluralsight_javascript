import {getUsers} from './api/userApi';

// Populating the table via API call
getUsers().then(result => {
  let usersBody = "";

  // eslint-disable-next-line no-debugger
  debugger;
  result.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>
    `
    global.document.getElementById('users').innerHTML = usersBody;
  });
})


// import numeral from 'numeral';
// import './index.css';

// const courseValue = numeral(1000).format('0.0,00€');
// // eslint-disable-next-line no-console
// console.log(`Have to pay ${courseValue} blabla!`);