from flask import Flask, render_template
app= Flask(__name__)

posts=[
	{
	'author':'Md Humaid Husain',
	'title':'Blog Post 1',
	'content':'First post content',
	'date_posted':'Dec 10,2020'
	},

	{
	'author':'Md Tyba Husain',
	'title':'Blog Post 2',
	'content':'Second post content',
	'date_posted':'Dec 11,2020'
	}
	

	

]

@app.route("/")
def home():
	return render_template("home.html",posts=posts)


@app.route("/about")
def about():
	return render_template("about.html",title='About')


if __name__=='__main__':
	app.run(debug=True)