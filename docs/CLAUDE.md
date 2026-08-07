# DSB MUN 5.0 Development Guidelines

## Terminology & Copy Rules
* **Leadership**: Always refer to the organizing team as "Leadership". Avoid using the word "Secretariat" in headings, sidebars, alerts, or legal texts.
* **Dress Code**: Since registrations are closed, the navigation menu and sub-anchors must link to the `#dresscode` section rather than a registration page.

## Styling & Aesthetic Guidelines
* **Portraits**: Leadership team portraits (Principal, Secretary-General, Director-General) must be rendered in full color. Do not apply filter classes like grayscale, contrast-filters, or monochrome masks that strip out the background. Use standard styling:
  ```html
  <div class="msg__portrait">
    <img src="filename.png" alt="Name, Title" style="width:100%;height:100%;object-fit:cover;display:block;">
  </div>
  ```

## Tooling & Command Protocols
* **Copying User-Uploaded Media**:
  * User uploads are saved to `/Users/aradhy/.gemini/antigravity/brain/<conversation-id>/.user_uploaded/media__<timestamp>.<ext>`.
  * Standard sandbox commands will fail to read this directory.
  * To copy files to the workspace:
    1. Call the `ask_permission` tool with `Action: "read_file"` for the source file.
    2. Run the copy command (`cp`) using `run_command` with `BypassSandbox: true`.
