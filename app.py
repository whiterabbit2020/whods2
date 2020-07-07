from flask import Flask, render_template, redirect, send_from_directory
from flask_pymongo import PyMongo
import requests
import json

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/whods"
mongo = PyMongo(app)


@app.route("/")
def index():
    db_results = mongo.db.covid_19.find({},{'_id': False})
    covid_data = [doc for doc in db_results]
    return render_template("index.html", covid_data=covid_data)


@app.route("/refresh")
def refresh():
    covid_19 = mongo.db.covid_19
    data = requests.get("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/owid-covid-data.json")
    data_json = json.loads(data.text)
    mongo_data = [{k:v} for k,v in data_json.items()]
    covid_19.delete_many({})
    covid_19.insert_many(mongo_data)
    return redirect("/", code=302)






if __name__ == "__main__":
    app.run(debug=True)