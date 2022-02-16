#!/bin/python
import json
import argparse
import base64

class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKCYAN = '\033[96m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

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
tcparsedLine = ""
gtparsedLine = "Group{"
for i in goods.keys():
    tcparsedLine += ("%i,null,%i;"%(i,goods[i]))
    gtparsedLine += ("item/%i+%i|"%(i,goods[i]))
tcparsedLine = tcparsedLine[:-1]
gtparsedLine = gtparsedLine[:-1] + "}"

tc_urlsafe_data = base64.urlsafe_b64encode(tcparsedLine.encode('utf-8'))
tc_urlsafe_data = str(tc_urlsafe_data, "utf-8")
print(bcolors.OKCYAN +"Teamcraft Link:"+bcolors.ENDC)
print("https://ffxivteamcraft.com/import/%s"%tc_urlsafe_data)

gt_urlsafe_data = gtparsedLine.encode('utf-8')
gt_urlsafe_data = str(gt_urlsafe_data, "utf-8")
print(bcolors.OKCYAN +"Garlandtools Link:"+bcolors.ENDC)
print("https://garlandtools.org/db/#group/%s"%gt_urlsafe_data)