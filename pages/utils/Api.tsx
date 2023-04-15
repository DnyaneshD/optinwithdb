const url = "http://remotejobs-env.eba-emwckwh2.eu-central-1.elasticbeanstalk.com/api"

export const api = {
    fecthJobList: () => {
        const endPoint = `${url}/jobList`;
        return fetch(endPoint)
            .then(resp => resp.json())
            .then(data => data)
    },
    fetchJobDetails: (jobId: number) => {
        const endPoint = `${url}/jobs/${jobId}`;
        return fetch(endPoint)
            .then(resp => resp.json())
            .then(data => data)
    },
    createJob: (data: any) => {
        const endPoint = `${url}/jobs`;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "jobTitle": data[1].jobTitle,
                "jobCategory": data[1].jobCategory,
                "jobType": data[1].jobType,
                "jobDescription": data[1].jobDescription,
                "howToApply": data[1].howToApply,
                "company": {
                    "name": data[2].name,
                    "email": data[2].email,
                    "logo": data[2].logo,
                    "location": data[2].location,
                    "website": data[2].website,
                    "description": data[2].description
                }
            })

        };
        return fetch(endPoint, requestOptions)
            .then(resp => resp.status)
    }
}


export default api;