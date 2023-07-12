from flask import Flask, render_template
from flask import url_for, session, request, redirect
import random

app = Flask(__name__)


def main():
    app.run(host='127.0.0.1', debug=True, port=80)

if __name__ == '__main__':
    main()