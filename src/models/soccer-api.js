class SoccerApi {
    constructor() {
        this.videoList = [];
    }
}

SoccerApi.prototype.getVideos = function() {
    let soccerRequest = {
        'method': 'Get'
    };
    
    return fetch('https://www.scorebat.com/video-api/v1/', soccerRequest)
    .then(response =>  {
        return response.json();
    })
    .catch(err => {
        return {
            error: true,
            msg: 'Falló al comunicarse'
        }
    });
};

export default SoccerApi;
export {
    SoccerApi
};