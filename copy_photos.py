#!/usr/bin/env python3
import shutil
import os

files_to_copy = [
    # Nature
    ('photography/nature/IMG_2034.jpg', 'public/photography/nature/IMG_2034.jpg'),
    ('photography/nature/IMG_2109.jpg', 'public/photography/nature/IMG_2109.jpg'),
    ('photography/nature/IMG_2444.jpg', 'public/photography/nature/IMG_2444.jpg'),
    ('photography/nature/IMG_4573.jpg', 'public/photography/nature/IMG_4573.jpg'),
    ('photography/nature/IMG_4777.jpg', 'public/photography/nature/IMG_4777.jpg'),
    ('photography/nature/IMG_4802.jpg', 'public/photography/nature/IMG_4802.jpg'),
    ('photography/nature/IMG_8656.jpg', 'public/photography/nature/IMG_8656.jpg'),
    # City
    ('photography/city/IMG_0804.jpg', 'public/photography/city/IMG_0804.jpg'),
    ('photography/city/IMG_1545.jpg', 'public/photography/city/IMG_1545.jpg'),
    ('photography/city/IMG_1548.jpg', 'public/photography/city/IMG_1548.jpg'),
    ('photography/city/IMG_2800.jpg', 'public/photography/city/IMG_2800.jpg'),
    ('photography/city/IMG_3908.jpg', 'public/photography/city/IMG_3908.jpg'),
    ('photography/city/IMG_4034.jpg', 'public/photography/city/IMG_4034.jpg'),
    # People
    ('photography/people/IMG_0474.jpg', 'public/photography/people/IMG_0474.jpg'),
]

for src, dst in files_to_copy:
    if os.path.exists(src):
        shutil.copy2(src, dst)
        print(f'✓ Copied {src} to {dst}')
    else:
        print(f'✗ Source not found: {src}')

print('\nDone!')
