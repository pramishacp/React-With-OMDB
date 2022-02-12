import React, { Component } from "react";
import Table from "./common/table";
import Image from "./common/image";

class MoviesTable extends Component {
  columns = [
    {
      path: "Poster",
      label: "Poster",
      content: movie => {
        console.log('HI', JSON.stringify(movie))
      return (<Image src={movie.Poster} /> )
      }
    },
    { path: "Title", label: "Title" },
    { path: "Year", label: "Year" },
    { path: "Type", label: "Type" }
  ];

  render() {
    const { movies, onSort, sortColumn } = this.props;

    console.log(this.props, )
    console.log('hihihi', movies)

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
