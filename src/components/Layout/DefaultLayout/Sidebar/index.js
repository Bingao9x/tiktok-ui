import classNames from 'classnames/bind';
import styles from './Sidabar.module.scss';
const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidabar</h2>
        </aside>
    );
}

export default Sidebar;
