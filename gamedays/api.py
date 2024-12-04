import requests
import json

def send_post_request(url, data, headers):
    response = requests.post(url, json=data, headers=headers)
    return response

def print_response(response):
    print("Status Code:", response.status_code)
    try:
        response_json = response.json()
        print("Response JSON:")
        print(json.dumps(response_json, indent=4))
    except json.JSONDecodeError:
        print("Response Text:")
        print(response.text)

if __name__ == "__main__":
    url = "https://api.example.com/endpoint"
    data = {
        "key1": "value1",
        "key2": "value2"
    }
    headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_ACCESS_TOKEN"
    }

    response = send_post_request(url, data, headers)
    print_response(response)