tsc

typeset archive='naviseal.zip'
typeset publication='publish.txt'
typeset package='package.json'

zip ${archive} \
    --compression-method deflate \
    --wild-stop-dirs \
    --recurse-paths . \
    -i@${publication}

git add ${archive} ${package}