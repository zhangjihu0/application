import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
function IndexPage() {
  let handleOpenCa = ()=>{
    let id="plus/barcode.html"
    console.log('dasdasd',window);
    window._clicked(id,'Barcode');
    
  }
  return (
    <div className={styles.normal}>
      <button onClick={handleOpenCa}>打开摄像头</button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
