import sqlite3
from flask import Flask, request, g, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

DATABASE = './db.sqlite3'


def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db


def get_sql_res(sql):
    conn = get_db()
    cur = conn.execute(sql)
    rv = cur.fetchall()
    cur.close()
    conn.commit()
    return rv


@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()


@app.route('/sql', methods=['POST'])
def index():
    sql = request.json["sql"]
    x = {}
    if sql != "":
        x["query"] = get_sql_res(sql)
    x["utenti"] = get_sql_res("SELECT * FROM utenti")
    return jsonify(x)


app.debug = True
app.run()
