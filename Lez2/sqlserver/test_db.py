import requests

r = requests.post("http://127.0.0.1:5000/sql", json={"sql": "SELECT * FROM utenti"})
print(r.json())


