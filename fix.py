import glob

script_tags = """  <script defer src="js/store.js"></script>
  <script defer src="js/data.js"></script>
  <script defer src="js/utils.js"></script>
  <script defer src="js/realityScore.js"></script>
  <script defer src="js/components/chartConfig.js"></script>
  <script defer src="js/components/coinCard.js"></script>
  <script defer src="js/components/navbar.js"></script>
  <script defer src="js/components/statusbar.js"></script>
  <script defer src="js/components/alerts.js"></script>
  <script defer src="js/api.js"></script>
  <script defer src="js/pages/home.js"></script>
  <script defer src="js/pages/coin.js"></script>
  <script defer src="js/pages/manipulation.js"></script>
  <script defer src="js/pages/insights.js"></script>
  <script defer src="js/pages/timetravel.js"></script>
  <script defer src="js/main.js"></script>"""

for f in glob.glob('c:/cryptexa/Cryptexa/*.html'):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    new_content = content.replace('<script type="module" src="js/main.js"></script>', script_tags)
    
    with open(f, 'w', encoding='utf-8') as file:
        file.write(new_content)
print('Updated HTML files:', glob.glob('c:/cryptexa/Cryptexa/*.html'))
