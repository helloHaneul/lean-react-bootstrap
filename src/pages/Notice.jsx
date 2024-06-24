import styles from './EventByBootstrap.module.css'

import { Form } from 'react-bootstrap';

const Notice = () => {
    return (
        <div style={{ padding: '8px 16px' }}>
            <Form.Control
                placeholder="답글을 입력해주세요."
                style={{ background: '#F6F6F6' }}
                className={styles.comment__input__field}
            />
        </div>
    );
}

export default Notice;