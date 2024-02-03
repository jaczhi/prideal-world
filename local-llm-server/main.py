from flask import Flask, request
import subprocess

app = Flask(__name__)

@app.route('/prompt')
def prompt():
    try:
        # Retrieve the input string from the request body
        input_string = request.json.get('input', '')

        # Validate that the input string is provided
        if not input_string:
            return "Error: 'input' is required in the request body", 400
        
        # Run the 'uname' command and capture the output
        result = subprocess.check_output(['ollama', 'run', 'llama2', f'"{input_string}"']).decode('utf-8').strip()
        return f"{result}"
    except Exception as e:
        return f"Error: {str(e)}"

if __name__ == '__main__':
    # Run the Flask app on http://127.0.0.1:5000/
    app.run(debug=True)
