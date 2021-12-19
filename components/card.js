export default function Card({ children }) {
    return (
        // Card 
        <article className="relative h-96 w-72 bg-gray-400 rounded-lg">
            {children}
        </article>
    )
}