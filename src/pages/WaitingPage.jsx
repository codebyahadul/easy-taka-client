const WaitingPage = () => {
    return (
        <div className="flex-grow flex items-center justify-center">
            <section className="w-full py-12 md:py-24 flex justify-center bg-white flex-col lg:py-32 bg-gradient-to-b from-gray-400 to-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center text-black">
                        {/* Text content */}
                        <div className="space-y-2">
                            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-5xl lg:text-3xl">
                                Waiting for Confirmation
                            </h1>
                            <p className="mx-auto max-w-[700px] text-sm sm:text-lg md:text-xl">
                                Your application is being processed. We are revolutionizing Mobile Financial Services with innovation and simplicity. Please wait a moment while we confirm your details.
                            </p>
                        </div>
                        {/* Spinner or Animation */}
                        <div className="flex justify-center">
                            <div className="w-16 h-16 border-t-4 border-b-4 border-gray-500 rounded-full animate-spin"></div>
                        </div>
                        {/* Additional Information */}
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500">
                                This may take a few moments.
                            </p>
                            <p className="text-sm text-gray-500">
                                If you have any questions, please contact our support team.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WaitingPage;
