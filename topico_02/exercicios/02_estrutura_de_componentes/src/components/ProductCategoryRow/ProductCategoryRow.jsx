/* eslint-disable react/prop-types */
function ProductCategoryRow({ category }) {
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }

  export {ProductCategoryRow}