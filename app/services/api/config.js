class Config {
    constructor(){
        this.host = "http://172.168.0.200:8000";
    }
    getAuthorizationHeader() {
        return {
            headers: {
                "X-Token": ``,
            },
        };
    }
}

export default new Config;