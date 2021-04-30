import { deleteUser, getUsers } from "./api/userAPI";
import "./index.css";

getUsers().then((result) => {
  let usersBody = "";

  result.forEach((user) => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`;
  });

  global.document.getElementById("users").innerHTML = usersBody;

  const delLinks = global.document.querySelectorAll(".deleteUser");
  Array.from(delLinks, (link) => {
    link.onclick = function (e) {
      e.preventDefault();
      const el = e.target;
      deleteUser(el.dataset.id);
      const row = el.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
