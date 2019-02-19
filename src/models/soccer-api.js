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
    });
};

export default SoccerApi;
export {
    SoccerApi
};