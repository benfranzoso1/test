export default function CardMeta() {
    return (
        // CardMeta Data
        // Layout Flex
        <div className="absolute w-full h-full bg-black/[.4] p-6 flex flex-col justify-between rounded-lg text-white">

            <div className="relative">
                {/* Surf NH Icon */}
                <div className="flex gap-2 items-center text-xs font-medium">
                    <div className="relative">
                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="14.5" cy="14.5" r="14.5" fill="white"/>
                            <path d="M23.88 17.9973H21.4293V16.3333H25.2827L23.8533 14.3333H25.2827L20.7573 8L16.232 14.3333H17.6613L16.232 16.3333H20.0853V17.9973H16.96C14.92 17.904 13.2907 16.2186 13.2907 14.1573C13.2907 13.4293 13.4987 12.752 13.8507 12.1706C14.1013 11.7573 14.4293 11.3946 14.8133 11.1013C14.456 10.52 14.0107 10.0133 13.4933 9.6C12.4773 8.784 11.2027 8.31999 9.84 8.31999C6.62133 8.31999 4 10.9386 4 14.1573C4 17.376 6.61866 19.9947 9.84 19.9947L25.8827 20C25.8827 18.8933 24.984 17.9973 23.88 17.9973ZM20.2747 12.9867H18.8453L20.7573 10.312L22.6693 12.9867H21.24L22.6693 14.9867H18.8453L20.2747 12.9867ZM9.83733 18.0027C7.71733 18.0027 5.992 16.2773 5.992 14.1573C5.992 12.0373 7.71733 10.312 9.83733 10.312C10.7013 10.312 11.5093 10.5946 12.1653 11.096C11.6133 11.9866 11.296 13.0346 11.296 14.1573C11.296 15.6266 11.8427 16.9707 12.7413 17.9973L9.83733 18.0027Z" fill="#00BBB4"/>
                        </svg>
                    </div>
                    SURF NH
                </div>
            </div>
            
            {/* Post Data */}
            <header className="relative">
                <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
            </header>

        </div>
    )
}