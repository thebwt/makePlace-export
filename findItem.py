#!/bin/python
import json
import argparse
import base64

parser = argparse.ArgumentParser(description="Read a Makeplace save and output at teamcraft export link.")
parser.add_argument('filename', type=str, help="Filepath of the save file")

args = vars(parser.parse_args())

save = json.load(open(args['filename']))

goods = {}

#Grab the Intererior Furniture
furn = save["interiorFurniture"]
for i in furn:
    if i["itemId"] in goods:
        goods[i["itemId"]]+=1
    else:
        goods[i["itemId"]]=1

#build string
#String format is  20545,null,3;17962,32308,1;20247,null,1
#I don't care about recipe ids, so just need to do the things
parsedLine = ""
for i in goods.keys():
    parsedLine += ("%i;null,%i;"%(i,goods[i]))
parsedLine = parsedLine[:-1]

urlsafe_data = base64.urlsafe_b64encode(parsedLine.encode('utf-8'))
urlsafe_data = str(urlsafe_data, "utf-8")
print("https://ffxivteamcraft.com/import/%s"%urlsafe_data)