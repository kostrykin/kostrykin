# [kostrykin.com](https://kostrykin.com)

**MIT License:**
If you like this work, feel free to fork, modify, and use yourself.

## Local setup

**Setup dependencies:**

- Create the Conda environment:
  ```bash
  conda env create -p .env -f environment.yml
  ```
- Activate the Conda environment:
  ```bash
  conda activate ./.env
  ```
- Install the required Ruby gems:
  ```bash
  bundle
  ```

**Test the site:**

```bash
bundle exec jekyll serve --port 8080
```
