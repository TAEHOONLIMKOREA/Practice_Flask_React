from flask import Flask, render_template
from flask import url_for, session, request, redirect
import random

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


def main():
    app.run(host='0.0.0.0', debug=True, port=80)

if __name__ == '__main__':
    main()