import './GlobalNotifications.scss'
import NotificationItem from "./NotificationItem";
import {useObservable} from "../useObservable.hook";
import {globalNotifications$} from "./GlobalNotifications.service";

const settings = {
    timeout: 5000
}

function GlobalNotifications() {
    const notifications = useObservable(globalNotifications$, []);

    return (
        <div className="global-notifications">
            <div className="notification-list">
                {notifications.map((n) => (
                    <div className='notification-item-wrapper' key={n.id}>
                        <NotificationItem
                            {...settings}
                            severity={n.severity}
                            message={n.message}
                            id={n.id}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GlobalNotifications;