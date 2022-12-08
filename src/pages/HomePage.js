import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Paginate from '../components/Paginate';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import SortBar from '../components/SortBar';
import ProductApi from '../data/product-api';

function HomePage() {
  const [search, setSearch] = React.useState('');
  const [sort, setSort] = React.useState('asc');
  const [page, setPage] = React.useState(1);
  const [size, setSize] = React.useState(5);
  const [products, setProducts] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(1);

  React.useEffect(() => {
    ProductApi.getAll({
      search, sort, page, size,
    }).then((data) => {
      setProducts(data.data.products);
      setPageCount(data.data.last_page);
      setPage(data.data.page);
    });
  }, [search, size, sort, page]);

  const onPageClick = (data) => {
    setPage(data.selected + 1);
  };

  const sChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const sortChangeHandler = (event) => {
    setSort(event.target.value);
  };

  const sizeChangeHandler = (event) => {
    setSize(event.target.value);
  };

  return (
    <>
      <Hero />
      <Container>
        <SearchBar s={search} sChange={sChangeHandler} />
        <h5 className="mt-4">Product</h5>
        <SortBar sortChange={sortChangeHandler} sizeChange={sizeChangeHandler} />
        <ProductList products={products} />
        <Paginate pageCount={pageCount} onPageClick={onPageClick} />
      </Container>
      <Footer />
    </>
  );
}

export default HomePage;
