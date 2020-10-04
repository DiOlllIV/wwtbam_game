const loadData = fetch('/config.json')
    .then(request => request.json());

export default loadData;