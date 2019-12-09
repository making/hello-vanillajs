const initialize = () => {
    const button = document.createElement('button');
    const response = document.createElement('pre');
    const getUserAgent = async () => {
        const data = await fetch('https://httpbin.org/user-agent').then(res => res.json());
        response.innerText = data['user-agent'];
    };
    button.innerText = 'Check User-Agent';
    button.addEventListener('click', getUserAgent);
    document.body.appendChild(button);
    document.body.appendChild(response);
};

document.addEventListener('DOMContentLoaded', initialize);