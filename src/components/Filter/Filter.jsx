import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter">
      <section className="title">
        <h3>Filter</h3>
        <p style={{ color: "royalblue" }}>clear</p>
      </section>
      <ul>
        <h4>Brands</h4>
        <li>
          <input type="checkbox" />
          <span>Lee Cooper</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Allen Solly</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Siya</span>
        </li>
      </ul>
      <ul>
        <h4>Size</h4>
        <li>
          <input type="checkbox" />
          <span>XL</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>L</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>M</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>S</span>
        </li>
      </ul>
      <ul>
        <h4>Ideal For</h4>
        <li>
          <input type="checkbox" />
          <span>Men</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Women</span>
        </li>
        <li>
          <input type="checkbox" />
          <span>Kids</span>
        </li>
      </ul>
    </div>
  );
};
