import requests, shutil, datetime
import time

nazwa = datetime.datetime.now().strftime("%Y-%m-%d-%H-%M-%S") + '.zip'
paczka = 'https://media.forgecdn.net/files/2935/323/RLCraft+Server+Pack+1.12.2+-+Beta+v2.8.2.zip'
sidfile = open("./sid/" + '000' + '.txt',"r+")
sid = sidfile.read()
print(sid)
mailfile = open("./sid/" + '001' + '.txt',"r+")
mail = mailfile.read()
print(mail)
passwordfile = open("./sid/" + '002' + '.txt',"r+")
password = passwordfile.read()
print(password)
strona = 'https://craftserve.pl/s/' + sid + '/files/'
s = requests.session()
r = s.post('https://craftserve.pl/login', {'email': mail, 'password': password, 'send': ''})
r.raise_for_status()
s.post('https://craftserve.pl/s/' + sid + '/console', 'stop')
time.sleep(10)
r = s.delete('https://craftserve.pl/s/936729/settings/restore?mysql=0&files=1')
s.post('https://craftserve.pl/s/' + sid + '/files/?url', {'url_data': paczka})
time.sleep(15)
r = s.post('https://craftserve.pl/s/' + sid + '/files_unzip/RLCraft+Server+Pack+1.12.2+-+Beta+v2.8.2.zip', {'destination': '/'})
time.sleep(10)
r = s.delete(strona + 'RLCraft+Server+Pack+1.12.2+-+Beta+v2.8.2.zip')
r = s.post('https://craftserve.pl/s/' + sid + '/settings/engines', {'engine': '095e58e8-c63d-4e44-bb7b-d827781c5384', 'step': '1', 'eula': '0', 'java_version': '1'})
r.raise_for_status()