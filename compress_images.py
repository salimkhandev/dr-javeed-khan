import os
from PIL import Image

image_mapping = [
    (r"C:\Users\salim\.gemini\antigravity-ide\brain\45f34e0a-4503-4821-9b18-86237d728aeb\blog_bariatric_safety_1788351731914.jpg", r"d:\dr javeed khan\images\blog-bariatric-safety.webp"),
    (r"C:\Users\salim\.gemini\antigravity-ide\brain\45f34e0a-4503-4821-9b18-86237d728aeb\blog_gastric_sleeve_1788351802926.jpg", r"d:\dr javeed khan\images\blog-gastric-sleeve.webp"),
    (r"C:\Users\salim\.gemini\antigravity-ide\brain\45f34e0a-4503-4821-9b18-86237d728aeb\blog_laparoscopic_tech_1788351878948.jpg", r"d:\dr javeed khan\images\blog-laparoscopic-tech.webp"),
    (r"C:\Users\salim\.gemini\antigravity-ide\brain\45f34e0a-4503-4821-9b18-86237d728aeb\blog_postop_lifestyle_1788351960506.jpg", r"d:\dr javeed khan\images\blog-postop-lifestyle.webp"),
    (r"C:\Users\salim\.gemini\antigravity-ide\brain\45f34e0a-4503-4821-9b18-86237d728aeb\blog_metabolic_diabetes_1788352043909.jpg", r"d:\dr javeed khan\images\blog-metabolic-diabetes.webp")
]

for src, dest in image_mapping:
    if os.path.exists(src):
        with Image.open(src) as img:
            # Resize image to reasonable web dimension (e.g. 800x450 for 16:9 thumbnail)
            img.thumbnail((800, 450), Image.Resampling.LANCZOS)
            
            # Start with quality 75 and lower if size exceeds 80KB
            quality = 75
            img.save(dest, 'WEBP', quality=quality, optimize=True)
            
            # Check file size
            while os.path.getsize(dest) > 80 * 1024 and quality > 30:
                quality -= 5
                img.save(dest, 'WEBP', quality=quality, optimize=True)
                
            size_kb = os.path.getsize(dest) / 1024
            print(f"Saved {os.path.basename(dest)}: {size_kb:.2f} KB (Quality {quality})")
    else:
        print(f"Source not found: {src}")
