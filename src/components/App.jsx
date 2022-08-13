import React from 'react';
import { Searchbar, ImageGallery, Button } from '../components';
import delivery from '../js/delivery';

export class App extends React.Component {
  state = {
    query: '',
    images: [],
    status: '',
  };

  count = 0; ////////////////

  handleSubmit = event => {
    event.preventDefault();
    if (delivery.query !== event.target[1].value.trim()) {
      delivery.query = event.target[1].value.trim();
      this.renderGallery();
    }
  };

  renderGallery = async () => {
    let data = {};
    if (delivery.page === 1) {
      this.setState({ status: 'newSearch' });
      this.setState({ images: [] });
    } else this.setState({ status: 'loading' });
    try {
      data = await delivery.fetch();
      console.log('this.data: ', data); ////////////////
    } catch (error) {
      console.log('error: ', error);
    }

    this.setState(prevState => ({
      images: [...prevState.images, ...data.hits],
      status: data.isEnd ? 'endGallery' : 'endLoading',
    }));
    !data.total && this.setState({ status: 'noImages' });
  };

  render() {
    console.log('render App #', ++this.count); ////

    return (
      <div className="app">
        <Searchbar onSubmit={this.handleSubmit} status={this.state.status} />
        <ImageGallery images={this.state.images} />
        <Button onClick={this.renderGallery} status={this.state.status} />
      </div>
    );
  }
}
