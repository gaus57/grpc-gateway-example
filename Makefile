# Makefile

generate:
	protoc -I proto \
	-I vendor/github.com/grpc-ecosystem/grpc-gateway \
	--go_out=./generate/golang --go_opt=paths=source_relative \
	--go-grpc_out=./generate/golang --go-grpc_opt=paths=source_relative \
	--grpc-gateway_out=./generate/golang --grpc-gateway_opt paths=source_relative \
	--grpc-gateway_opt generate_unbound_methods=true \
	--swagger_out=allow_merge=true,merge_file_name=api:. \
	--grpc-gateway-ts_out=./generate/ts \
	./proto/*/*.proto

dependencies:
	apt install -y protobuf-compiler

.PHONY: generate dependencies
