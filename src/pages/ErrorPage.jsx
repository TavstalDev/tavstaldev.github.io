const isHttpErrorCode = (code) => {
    return Number.isInteger(code) && code >= 400 && code < 600;
};

const getHttpErrorName = (code) => {
    switch (code) {
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 402:
            return "Payment Required";
        case 403:
            return "Forbidden";
        case 404:
            return "Not Found";
        case 405:
            return "Method Not Allowed";
        case 406:
            return "Not Acceptable";
        case 407:
            return "Proxy Authentication Required";
        case 408:
            return "Request Timeout";
        case 409:
            return "Conflict";
        case 410:
            return "Gone";
        case 411:
            return "Length Required";
        case 412:
            return "Precondition Failed";
        case 413:
            return "Payload Too Large";
        case 414:
            return "URI Too Long";
        case 415:
            return "Unsupported Media Type";
        case 416:
            return "Range Not Satisfiable";
        case 417:
            return "Expectation Failed";
        case 418:
            return "I'm a teapot";
        case 421:
            return "Misdirected Request";
        case 422:
            return "Unprocessable Entity";
        case 423:
            return "Locked";
        case 424:
            return "Failed Dependency";
        case 425:
            return "Too Early";
        case 426:
            return "Upgrade Required";
        case 428:
            return "Precondition Required";
        case 429:
            return "Too Many Requests";
        case 431:
            return "Request Header Fields Too Large";
        case 451:
            return "Unavailable For Legal Reasons";
        case 500:
            return "Internal Server Error";
        case 501:
            return "Not Implemented";
        case 502:
            return "Bad Gateway";
        case 503:
            return "Service Unavailable";
        case 504:
            return "Gateway Timeout";
        case 505:
            return "HTTP Version Not Supported";
        case 511:
            return "Network Authentication Required";
        default:
            return "Unknown Error";
    }
}

const  getHttpErrorDescription = (code) => {
    switch (code) {
        case 400:
            return "The server could not understand the request due to invalid syntax.";
        case 401:
            return "The client must authenticate itself to get the requested response.";
        case 402:
            return "The request was valid, but the server is refusing action.";
        case 403:
            return "The client does not have access rights to the content.";
        case 404:
            return "The server can not find the requested resource.";
        case 405:
            return "The request method is known by the server but has been disabled and cannot be used.";
        case 406:
            return "The server can only generate a response that is not accepted by the client.";
        case 407:
            return "The client must first authenticate itself with the proxy.";
        case 408:
            return "The server would like to shut down this unused connection.";
        case 409:
            return "The request conflicts with the current state of the server.";
        case 410:
            return "The content was deleted from the server.";
        case 411:
            return "The server refuses to accept the request without a defined Content-Length.";
        case 412:
            return "The server does not meet one of the preconditions that the requester put on the request.";
        case 413:
            return "The request entity is larger than limits defined by the server.";
        case 414:
            return "The request URI is longer than the server is willing to interpret.";
        case 415:
            return "The media format of the requested data is not supported by the server.";
        case 416:
            return "The range specified by the Range header field in the request cannot be fulfilled.";
        case 417:
            return "The expectation indicated by the Expect request-header field cannot be met by the server.";
        case 418:
            return "The server refuses the attempt to brew coffee with a teapot.";
        case 421:
            return "The request was directed at a server that is not able to produce a response.";
        case 422:
            return "The request was well-formed but was unable to be followed due to semantic errors.";
        case 423:
            return "The resource that is being accessed is locked.";
        case 424:
            return "The request failed due to failure of a previous request.";
        case 425:
            return "The server is unwilling to risk processing a request that might be replayed.";
        case 426:
            return "The client should switch to a different protocol.";
        case 428:
            return "The origin server requires the request to be conditional.";
        case 429:
            return "The user has sent too many requests in a given amount of time.";
        case 431:
            return "The server is unwilling to process the request because its header fields are too large.";
        case 451:
            return "The user has been legally forbidden from accessing the resource.";
        case 500:
            return "The server has encountered a situation it doesn't know how to handle.";
        case 501:
            return "The request method is not supported by the server and cannot be handled.";
        case 502:
            return "The server was acting as a gateway or proxy and received an invalid response from the upstream server.";
        case 503:
            return "The server is not ready to handle the request.";
        case 504:
            return "The server is acting as a gateway and cannot get a response in time.";
        case 505:
            return "The HTTP version used in the request is not supported by the server.";
        case 511:
            return "The client needs to authenticate to gain network access.";
        default:
            return "Unexpected error occurred.";
    }
}

function ErrorPage({errorCode}) {
    if (!isHttpErrorCode(errorCode)) {
        errorCode = 418;
    }

    return (
        <>
            <div className="hero bg-base-200 min-h-screen" style={{
                backgroundImage:
                    "url(/images/error.png)",
            }}>
                <div className="hero-overlay"></div>
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <p className="text-xl text-error font-bold py-2 ">{errorCode} ERROR</p>
                        <h1 className="text-2xl text-white font-bold">{getHttpErrorName(errorCode)}</h1>
                        <p className="pt-2 text-white/90 pb-4">
                            {getHttpErrorDescription(errorCode)}
                        </p>
                        <a href="/" className="btn btn-error">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="h-5 w-5">
                                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                            <span className="fw-bold">Go Back</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage