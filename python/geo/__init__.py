import osgeo.ogr as ogr
import osgeo.osr as osr
import polars as pl


if __name__ == '__main__':

    csv_path = "./pz-dm.xlsx"
    csv_source = pl.read_excel(csv_path)

    print(csv_source)
