from flask import Flask, request, render_template, redirect

import requests
import MySQLdb
import json

app = Flask(__name__)


@app.route('/')
def hello():
    # hi
    return render_template('index.html', routes="name")

@app.route('/tdbank')
def main():
    # hi
    return render_template('index.html', routes="name")

@app.route('/dashboard_existing_final')
def dash():
    # hi
    return render_template('dashboard_existing_final.html', routes="name")

@app.route('/coffee_queue')
def cq():
    # hi
    return render_template('coffee_queue.html', routes="name")

@app.route('/coffee_screen_final')
def csf():
    # hi
    return render_template('coffee_screen_final.html', routes="name")

@app.route('/intitial_coffee_screen_final')
def icsf():
    # hi
    return render_template('intitial_coffee_screen_final.html', routes="name")

@app.route('/rating_final')
def rf():
    # hi
    return render_template('rating_final.html', routes="name")

@app.route('/sign_in_final')
def sif():
    # hi
    return render_template('sign_in_final.html', routes="name")

@app.route('/thank-you_2')
def ty2():
    # hi
    return render_template('thank-you_2.html', routes="name")

@app.route('/thank_you_final')
def tyf():
    # hi
    return render_template('thank_you_final.html', routes="name")

@app.route('/will_help_final')
def help():
    # hi
    return render_template('index.html', routes="name")



if __name__ == "__main__":
    app.run()
