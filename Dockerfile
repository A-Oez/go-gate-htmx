FROM golang:1.23-alpine

WORKDIR /app

COPY go.* ./
RUN go mod download

COPY . .

RUN go build -o /app/main ./cmd

EXPOSE 5050

CMD ["/app/main"]

#build image: docker build -t go-gate-htmx .
#start container: docker run -p 5050:3000 go-gate-htmx 