export default function CardCarousel({ children }) {
    return (
        // Unordered list that will contain articles
        <ul className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto">
            {/* List item containing the article */}
            {children}
        </ul>
    )
}