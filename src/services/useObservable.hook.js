import { useEffect, useState} from "react";

const noTransform = (value$) =>(value$);

export function useObservable(obs, initialValue , transform) {
    const [observedValue] = useObservableWithState(obs, initialValue , transform);
    return observedValue;
}

export function useObservableWithState(obs, initialValue , transform) {
    const [initValue] = useState(initialValue);
    const [observedValue, setObservedValue] = useState(initialValue);
    const [error, setError] = useState(null);
    const [isComplete, setComplete] = useState(false);
    // const [subscription, setSubscription] = useState(undefined);

    // const unsubscribe = useCallback(() => {
    //     subscription.unsubscribe();
    // }, [subscription]);

    transform = transform ? transform : noTransform;

    useEffect(() => {
        setObservedValue(initValue);
        setError(undefined);
        setComplete(false);

        const sub = obs
            .pipe(transform)
            .subscribe(
                (value) => {
                    setObservedValue(value);
                },
                (error) => {
                    setError(error);
                },
                () => {
                    setComplete(true);
                }
            )

        // setSubscription(sub);

        return () => {
            sub.unsubscribe();
        }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [obs, initialValue]);

    return [observedValue, error, isComplete];
}