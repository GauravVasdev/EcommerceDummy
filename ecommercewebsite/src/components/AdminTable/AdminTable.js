import React, { useState } from "react";
import "./adminTable.scss";
import { useDeleteCard, useGetCard, useUpdatedCard } from "../../query/user/adduser/userquery";
import BootstrapTable from "react-bootstrap-table-next";
import { useEffect } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AdminTable = () => {
  const { mutateAsync: deleteMutateAsync } = useDeleteCard();
  const navigate = useNavigate();


  const deleteCard = (row) => {
    debugger;
    console.log(row.card_uuid);
    deleteMutateAsync(row.card_uuid);
  };

  const { data: cardData } = useGetCard();
  const columns = [
    {
      dataField: "image",
      text: "Card",
      classes: "w-25 text-center",
      formatter: (cell, row, rowIndex, extraData) => (
        <img src={row.image} className="w-25 text-center" />
      ),
    },
    {
      dataField: "title",
      text: "Title",
    },
    {
      dataField: "price",
      text: "Price",
      sort: true,
    },
    {
      dataField: "gender",
      text: "Gender",
    },
    {
      text: "Actions",
      classes: "w-25 text-center",
      formatter: (cell, row, rowIndex, extraData) => (
        <div>
          <Button className="btn btn-primary mr-3" onClick={() => navigate(`/admin-form/${row.card_uuid}`)}>Edit</Button>
          <Button className="btn btn-primary" onClick={() => deleteCard(row)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Link to="/admin-form">
        <Button className="btn btn-success mt-3 mb-3">Go back to form</Button>
      </Link>

      <BootstrapTable
        keyField="id"
        data={cardData}
        columns={columns}
        striped
        hover
        condensed
        pagination={paginationFactory()}
      />
    </>
  );
};

export default AdminTable;
