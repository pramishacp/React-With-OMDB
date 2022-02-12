import React, { Component } from "react";
import Table from "./common/table";
import Image from "./common/image";

class MoviesTable extends Component {
  columns = [
    {
      path: "Poster",
      label: "Poster",
      content: movie => <Image src={movie.Poster} /> 
    },
    { path: "Title", label: "Title" },
    { path: "Year", label: "Year" },
    { path: "Type", label: "Type" }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        data={movies}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
