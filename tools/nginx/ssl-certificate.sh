SSL_DIR="./ssl"
ROOT_SSL_NAME="node.dev"
ROOT_SSL_FQDN="node.dev"

# Create Nginx SSL Dir if it does not exists.
if [ ! -d $SSL_DIR ]; then
  mkdir -p $SSL_DIR
fi


# Create your very own Root Certificate Authority
openssl genrsa \
  -out "$SSL_DIR/$ROOT_SSL_NAME.key" \
  2048

# Self-sign your Root Certificate Authority
# Since this is private, the details can be as bogus as you like
openssl req \
  -x509 \
  -new \
  -sha256 \
  -nodes \
  -key "$SSL_DIR/$ROOT_SSL_NAME.key" \
  -days 3652 \
  -out "$SSL_DIR/$ROOT_SSL_NAME.crt" \
  -subj "/C=EE/ST=Tallinn/L=FakeTaxi/O=ACME Signing Authority Inc/CN=${ROOT_SSL_FQDN}"