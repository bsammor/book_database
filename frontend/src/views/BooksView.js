import React from "react";
import axiosInstance from "../utils/axiosInstance";

export default class BooksView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    axiosInstance
      .get("/recipes/")
      .then((res) => {
        this.setState({ books: res.data });
      })
      .catch((err) => this.props.history.replace("/login"));
  }

  render() {
    return <div>{JSON.stringify(this.state.books)}</div>;
  }
}
