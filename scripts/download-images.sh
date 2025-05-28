#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p public/images

# Download images from Unsplash
curl -o public/images/hero.jpg "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
curl -o public/images/montana-project.jpg "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
curl -o public/images/california-project.jpg "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
curl -o public/images/silos-living.jpg "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80"
curl -o public/images/team-placeholder.jpg "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"

echo "Images downloaded successfully!" 