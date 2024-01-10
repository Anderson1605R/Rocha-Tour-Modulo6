import Link from "next/link";
import React from "react";
import styles from "./btn.module.css";
function Button({ href, name, className }) {
  return (
    <div className={className}>
      <Link href={href} className={styles.btn}>
        {name}
      </Link>
    </div>
  );
}

export default Button;
