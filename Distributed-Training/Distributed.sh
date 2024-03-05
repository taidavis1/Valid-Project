#!/bin/bash

#SBATCH --job-name=taihenry
#SBATCH --nodes=${NUM_NODES}
#SBATCH --gpus-per-node=${NUM_GPUS}

module purge                        
ml cudatoolkit-standalone/11.8.0    
ml tensorflow


if [[-n "${NUM_NODES}" && "${NUM_NODES}" == 1]]; then
    !python /models/research/object_detection/model_main_tf2.py \
    --pipeline_config_path=/model_saved/pipeline.config \
    --model_dir=/training \
    --alsologtostderr

elif [[-n "${NUM_NODES}" && "${NUM_NODES}" > 1]]; then
    !python /models/research/object_detection/model_main_tf2.py --num_workers=${NUM_NODES} \
    --pipeline_config_path=/model_saved/pipeline.config \
    --model_dir=/training \
    --alsologtostderr
fi
