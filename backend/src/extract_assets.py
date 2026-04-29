import os

html_path = r'c:\cryptexa\Cryptexa\index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

css_lines = []
js_lines = []

in_style = False
in_script = False
new_html = []

for line in lines:
    if '<style>' in line:
        in_style = True
        new_html.append('  <link rel="stylesheet" href="css/style.css" />\n')
        continue
    if '</style>' in line:
        in_style = False
        continue
        
    if '<script>' in line and 'chart.js' not in line:
        in_script = True
        new_html.append('  <script src="js/main.js"></script>\n')
        continue
    if '</script>' in line and in_script:
        in_script = False
        continue
        
    if in_style:
        css_lines.append(line)
    elif in_script:
        js_lines.append(line)
    else:
        new_html.append(line)

os.makedirs(r'c:\cryptexa\Cryptexa\css', exist_ok=True)
os.makedirs(r'c:\cryptexa\Cryptexa\js', exist_ok=True)

with open(r'c:\cryptexa\Cryptexa\css\style.css', 'w', encoding='utf-8') as f:
    f.writelines(css_lines)

with open(r'c:\cryptexa\Cryptexa\js\main.js', 'w', encoding='utf-8') as f:
    f.writelines(js_lines)

with open(html_path, 'w', encoding='utf-8') as f:
    f.writelines(new_html)

print("Extraction complete. Created css/style.css and js/main.js")
