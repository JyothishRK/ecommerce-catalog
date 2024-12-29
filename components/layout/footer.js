import { Fragment } from "react";

import styles from "./footer.module.css";

function Footer() {
    return (
        <Fragment>
            <footer className={styles.footer}>
                <div className={styles.container}>
                    <p className={styles.text}>© 2025 R K Jyothish. All rights reserved.</p>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
