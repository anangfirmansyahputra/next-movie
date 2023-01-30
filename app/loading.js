import "./loading.css";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="w-screen h-screen flex items-center justify-center absolute top-0 left-0">
            <svg viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </div>
    );
}
