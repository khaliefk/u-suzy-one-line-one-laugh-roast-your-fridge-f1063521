import os

LINE = "My fridge is the only roommate who pays no rent, hums show tunes at 3 a.m., and still lets my milk expire out of spite."

def main():
    text = " ".join(LINE.split())
    if not 1 <= len(text) <= 200:
        raise ValueError(f"entry must be 1-200 characters, got {len(text)}")
    out_dir = os.environ.get("OUTPUT_DIR") or "/output"
    os.makedirs(out_dir, exist_ok=True)
    with open(os.path.join(out_dir, "entry.txt"), "w", encoding="utf-8") as f:
        f.write(text)

if __name__ == "__main__":
    main()
