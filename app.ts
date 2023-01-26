enum RequestType {
  GET = 'get',
  POST = 'post',
}

function fetchWidthAuth(url: string, method: 'post' | 'get'): 1 | -1 {
    return 1 
}
fetchWidthAuth('s', 'post');

const method = 'post'

fetchWidthAuth('s', method as 'post');
