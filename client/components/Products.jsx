import React from 'react';
import { gql, graphql } from 'react-apollo';
import ProductEntry from './ProductEntry.jsx';

class Products extends React.Component {

  renderProductEntries(products) {
    return products.map(product => <ProductEntry key={product.id} product={product}/>);
  }

  renderLoading() {
    return (
      <div>Loading</div>
    );
  }

  render() {
    return (
      <aside className='productsAside'>
        {this.props.data.loading ? this.renderLoading() : this.renderProductEntries(this.props.data.products)}
      </aside>
    );
  }
}

const query = gql`
  query {
    products {
      id
      owner
      category
      subcategory
      type
      title
      description
      price
      inStock
    }
  }
`;

export default graphql(query)(Products);
