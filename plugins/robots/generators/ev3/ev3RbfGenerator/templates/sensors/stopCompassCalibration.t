DATA32 @@RANDOM_ID_1@@
ARRAY(CREATE8, 3, @@RANDOM_ID_1@@)
ARRAY(INIT8, @@RANDOM_ID_1@@, 0, 3, 1, 65, 0)

DATA32 @@RANDOM_ID_2@@
ARRAY(CREATE8, 4, @@RANDOM_ID_2@@)
ARRAY(INIT8, @@RANDOM_ID_2@@, 0,4,1,1,1,1)

INPUT_DEVICE(SETUP, 0, @@PORT@@, 1, 0, 3, @@@RANDOM_ID_1@@, 0, @@@RANDOM_ID_2@@)
INPUT_DEVICE(SETUP, 0, @@PORT@@, 1, 0, 2, @@@RANDOM_ID_1@@, 1, @@@RANDOM_ID_2@@)

DATA8 @@RANDOM_ID_3@@
ARRAY_READ(@@RANDOM_ID_2@@, 0, @@RANDOM_ID_3@@)
MOVE8_32(@@RANDOM_ID_3@@, @@VARIABLE@@)
CP_EQ32(@@VARIABLE@@, 0, @@VARIABLE@@)
