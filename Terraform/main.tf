provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "ec2-instance" {
  ami = "ami-0360c520857e3138f"
  instance_type = "t2.micro"
  key_name = "test"
}
output "public-ip" {
  value = {
public_ip = aws_instance.ec2-instance.public_ip
  }
}