import os
from PIL import Image
from concurrent.futures import ThreadPoolExecutor, as_completed

def convert_image(file_path, output_file_path):
    try:
        # Open the image and convert it to WEBP
        with Image.open(file_path) as img:
            img.save(output_file_path, 'WEBP')
        print(f"Converted: {file_path} -> {output_file_path}")
    except Exception as e:
        print(f"Failed to convert {file_path}: {e}")

def process_directory(root, files, output_path):
    file_counter = 1
    futures = []
    
    with ThreadPoolExecutor(max_workers=3) as executor:
        for file in files:
            if (file.lower().endswith('.png') or file.lower().endswith('.jpg') or file.lower().endswith('.jpeg')) and not file.startswith('._'):
                # Define the full file paths
                file_path = os.path.join(root, file)
                output_file_path = os.path.join(output_path, f"{file_counter}.webp")

                # Submit the conversion task to the thread pool
                futures.append(executor.submit(convert_image, file_path, output_file_path))
                
                # Increment the counter after submitting the task
                file_counter += 1

        # Wait for all threads to complete
        for future in as_completed(futures):
            future.result()

def convert_images_to_webp(source_dir, output_dir):
    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Walk through the source directory
    for root, dirs, files in os.walk(source_dir):
        # Create corresponding directories in the output folder
        relative_path = os.path.relpath(root, source_dir)
        output_path = os.path.join(output_dir, relative_path)
        if not os.path.exists(output_path):
            os.makedirs(output_path)

        print(f"Processing directory: {root}")
        print(f"Output directory: {output_path}")

        process_directory(root, files, output_path)

# Define the source and output directories
source_directory = 'GAFAS'
output_directory = 'output'

# Run the conversion function
convert_images_to_webp(source_directory, output_directory)
