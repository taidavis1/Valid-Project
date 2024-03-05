FROM python:3.9
WORKDIR /backend

ENV TZ=America/Los_Angeles
RUN apt-get update && \
    apt-get install -y tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && \
    echo $TZ > /etc/timezone

COPY requirements.txt requirements.txt
RUN pip install --upgrade pip
RUN pip install uvicorn[standard]
RUN pip install -r requirements.txt
EXPOSE 8080

COPY . .

CMD ["uvicorn", "main:app", "--proxy-headers" , "--host", "0.0.0.0", "--port", "8080"]