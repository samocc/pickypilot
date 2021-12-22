import {shareReplay, Subject} from 'rxjs';
import {scan} from 'rxjs/operators'

const notificationEvent$ = new Subject();
const NOTIFICATION_TYPES = {
    DELETE: 'delete',
    CREATE: 'create',
}

export const globalNotifications$ = (
    notificationEvent$.pipe(
        scan((currentNotifications, notificationEvent) => {
            if(notificationEvent.type === NOTIFICATION_TYPES.CREATE) {
                return [...currentNotifications, notificationEvent.notification];
            } else if (notificationEvent.type === NOTIFICATION_TYPES.DELETE) {
                return currentNotifications.filter((notification) => (notification.id !== notificationEvent.id))
            }
        }, []),
        shareReplay(1)
    )
);

export const NotificationService = {
    success: (message, opts) => createNotification("success", message, opts),
    error: (message, opts) => createNotification("error", message, opts),
    info: (message, opts) => createNotification("info", message, opts),
    warn: (message, opts) => createNotification("warning", message, opts),
}

const createNotification = (severity, message, opts) => {
    const id = generateId();
    const notification = {
        id,
        message,
        severity,
        options: opts
    }
    const event = {
        type: NOTIFICATION_TYPES.CREATE,
        notification
    }
    notificationEvent$.next(event);
}

export const deleteNotification = (id)  => {
    const event = {
        type: NOTIFICATION_TYPES.DELETE,
        id
    }
    notificationEvent$.next(event);
}

function generateId() {
    return Date.now();
}