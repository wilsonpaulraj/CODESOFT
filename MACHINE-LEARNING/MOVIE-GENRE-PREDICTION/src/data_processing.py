import pandas as pd
import numpy as np  


data_file = './Data/train_data.txt'

column_names = ['ID', 'Title', 'Genre', 'Summary']

with open(data_file, 'r', encoding='utf-8') as file:
    movies = file.readlines()

data = [movie.strip().split(' ::: ') for movie in movies]

df = pd.DataFrame(data, columns=column_names)

print( df.head(5) )
