#!/bin/bash

git clone https://github.com/tensorflow/models
pip install -U --pre tensorflow=="2.*"
pip install tf_slim

export PYTHON_LOCATION=$(which python)

rm -rf /usr/local/lib/python3.10/dist-packages/tf_slim/data/tfexample_decoder.py