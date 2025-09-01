provider "aws" {
  region = "us-east-2"
}

resource "aws_instance" "ec2-instance" {
  ami = "ami-0cfde0ea8edd312d4"
  instance_type = "t2.medium"
  key_name = "us-east-2"
}
output "public-ip" {
  value = {
public_ip = aws_instance.ec2-instance.public_ip
  }
}