provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "frontend" {
  bucket = "italian-gacha-frontend-demo"
  acl    = "public-read"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  tags = {
    Name = "Italian Gacha Frontend"
  }
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = "*",
        Action = ["s3:GetObject"],
        Resource = "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}

resource "aws_s3_bucket_object" "index" {
  bucket = aws_s3_bucket.frontend.id
  key    = "index.html"
  source = "../frontend/index.html"
  content_type = "text/html"
}

resource "aws_s3_bucket_object" "script" {
  bucket = aws_s3_bucket.frontend.id
  key    = "script.js"
  source = "../frontend/script.js"
  content_type = "application/javascript"
}

output "website_url" {
  value = aws_s3_bucket.frontend.website_endpoint
}
