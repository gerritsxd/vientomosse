from PIL import Image
import os

def create_collage(images_folder, output_path, target_resolution=(1080, 1920)):
    images = []

    # Open and resize images
    for filename in os.listdir(images_folder):
        if filename.endswith(('.jpg', '.jpeg', '.png')):
            image_path = os.path.join(images_folder, filename)
            img = Image.open(image_path)
            img = img.resize(target_resolution, Image.ANTIALIAS)
            images.append(img)

    # Determine the size of the collage
    collage_width = target_resolution[0]
    collage_height = target_resolution[1] * len(images)

    # Create a new image for the collage
    collage = Image.new('RGB', (collage_width, collage_height), (255, 255, 255))

    # Paste resized images into the collage
    y_offset = 0
    for img in images:
        collage.paste(img, (0, y_offset))
        y_offset += target_resolution[1]

    # Save the collage
    collage.save(output_path)

if __name__ == "__main__":
    input_folder = "paintings"
    output_collage = "paintings/collage.jpg"
    create_collage(input_folder, output_collage)
