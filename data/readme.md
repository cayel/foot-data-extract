# Origine des données
Extraction des données à partir de https://github.com/footballcsv

Extraction du fichier premier-league-94.csv depuis : https://github.com/footballcsv/eng-england/blob/master/1990s/1993-94/1-premierleague.csv

Extraction du ficher ligue1-95.csv depuis : https://github.com/footballcsv/fr-france/blob/master/1994-95/1-division1.csv

# Stockage des données extraites
Table League
- Id
- Country
- Name

Table Season
- Id
- IdLeague
- Name
- Year

Table Score
- Id
- IdLeague
- IdTeamHome
- IdTeamAway
- Round
- Date
- GoalFullTimeHome
- GoalFullTimeAway
- GoalHalfTimeHome
- GoalHalfTimeAway

Table Team
- Id
- TeamName
