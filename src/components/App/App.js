import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

class App extends Component {
  state = {
    articles: [],
    search: '',
    page: 1,
    per_page: 12,
    loading: false,
    largeImageURL: null,
  };
}

export default App;
