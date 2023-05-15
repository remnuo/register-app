import React, { useState, useEffect } from "react";
import { StyledDiv } from "./GetList.styled";
import { getClientRequest, deleteByIdRequest, updateByIdRequest } from "../../api-calls/auth/index";

export default function RegistredClients() {
  const [clients, setClients] = useState([]);

  async function handleDelete(_id) {
    try {
      await deleteByIdRequest(_id);
      setClients(clients.filter((client) => client._id !== _id));
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdate(id, updatedData) {
    try {
      await updateByIdRequest(id, updatedData);
      setClients((clients) =>
        clients.map((client) => {
          if (client.id === id) {
            return { ...client, ...updatedData };
          } else {
            return client;
          }
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getClientRequest();
      if (data) {
        setClients(data);
      }
    }
    fetchData();
  }, []);

  const formattedDateTime = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <StyledDiv>
      <table>
        <thead>
          <tr>
            <th>Registration Date</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Change</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{formattedDateTime(client.registerDate)}</td>
              <td>
                {client.firstName} {client.lastName}
              </td>
              <td>{client.email}</td>
              <td>
                <button
                  onClick={() => {
                    const newDate = prompt(
                      "Enter new registration date and time:",
                      client.registerDate
                    );
                    if (newDate) {
                      handleUpdate(client._id, newDate);
                    }
                  }}
                >
                  Change
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(client._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledDiv>
  );
}
