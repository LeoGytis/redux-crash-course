import React, { Component } from "react";

export default class Postform extends Component {
  constructor(props) {
    super(props);
    this.sate = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state?.title,
      body: this.state?.body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <h1>Add post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state?.title}
            />
          </div>
          <div>
            <br />
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state?.body}
            ></textarea>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
