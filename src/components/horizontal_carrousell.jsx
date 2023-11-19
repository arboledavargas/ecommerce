import styles from "./horizontal_carrousell.module.css";

export default function HorizontalCarrousell({ brands }) {
  return (
    <div className={styles.brand_carrousell}>
      <h1 className={styles.brand_carrousell_title}>Brands</h1>
      <div className={styles.brand_carrousell_content}>
        {brands.map((brand) => (
          <div className={styles.brand}>
            <img className={styles.brand_image} src={brand.brandSrc} />

            <h6>BrandName</h6>
          </div>
        ))}
      </div>
    </div>
  );
}
