const SoccerAPI = {
    getVideos() {
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
    }
}
export default SoccerAPI;
export {
    SoccerAPI
};