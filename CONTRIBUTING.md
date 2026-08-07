# Contributing to DSB MUN 5.0

Thank you for your interest in contributing to **DSB MUN 5.0**! We welcome contributions from developers, designers, and MUN enthusiasts to help make this platform even better.

---

## 📜 Code of Conduct
- Be respectful, inclusive, and collaborative.
- Adhere to the design contract outlined in [DESIGN.md](DESIGN.md).
- Avoid generic "AI-slop" anti-patterns (e.g. generic dark blue glassmorphism, monochrome filters on leadership photos, or non-responsive layout grids).

---

## 🛠️ How to Contribute

### 1. Reporting Bugs & Issues
If you encounter a bug or layout issue (especially on specific mobile browsers):
1. Check existing issues to see if it has already been reported.
2. Open a new issue with a clear title, description, browser/device specifications, and steps to reproduce.

### 2. Submitting Pull Requests
1. **Fork the Repository**: Create your own fork of `aradhyjain107/DSBMUN`.
2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make Your Changes**:
   - Maintain the Impeccable Design tokens (`--paper: #F2EBDC`, `--navy: #0E2A8A`, `--red: #C8281C`, `--lime: #B8D62E`).
   - Use `Bebas Neue` for display headers and `Inter` for body copy.
   - Test accessibility (`:focus-visible` dual ring, keyboard arrow navigation for tablists).
4. **Commit Your Changes**:
   ```bash
   git commit -m "feat: Add amazing new feature"
   ```
5. **Push to Your Fork & Open a PR**:
   ```bash
   git push origin feature/amazing-feature
   ```
   Open a Pull Request describing your changes and testing results.

---

## 🎨 Design System Rules & Terminology
- **Leadership**: Always refer to conference organizers as "Leadership" rather than "Secretariat" in public headings.
- **Portraits**: Leadership portraits must remain in full color. Do not apply grayscale or contrast filters.
- **Dress Code**: Link navigation directly to `#dresscode` (Day 1: Indian Traditional, Day 2: Western Formal).

---

## 📄 License
By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
