echo -e "FROM python:3\n
ENV FILENAME=main.py MODULES=numpy\ scipy\ pandas \n
RUN pip install \$MODULES\n
CMD ["sh", "-c",\"python \$FILENAME\"]" > Dockerfile # sh is used to give the command a shell to parse the variable $FILENAME 
sha1sum Dockerfile