# Contributing to Bob - 3D Virtual Reality Experiment

🎉 Thanks for taking the time to contribute! Every contribution is appreciated.

Bob is a learning project exploring A-Frame and web-based VR experiences. Whether you want to add features, improve the experience, or fix bugs, your help is welcome!

## 📑 Summary

- [Found a bug?](#-found-a-bug)
- [Fixed a bug?](#-fixed-a-bug)
- [Cosmetic changes](#-cosmetic-changes-formatting-whitespace-wording)
- [Want to add a feature or improve something?](#-want-to-add-a-feature-or-improve-something)
- [Title & naming guidelines](#-title--naming-guidelines)
- [Development Workflow](#-development-workflow)
- [Final notes](#-final-notes)

## 🐞 Found a bug?

Before opening a new issue, please:

- Check if the bug has already been reported in the  
  [Issues](https://github.com/Talyslan/bob-3d-virtual-reality/issues).

If you don't find anything related:

- Open a new issue and include:
  - A clear title and description
  - Steps to reproduce the problem
  - Expected vs actual behavior
  - Screenshots, videos, or examples if possible
  - Browser and device information (especially for VR/WebXR issues)

The more context you provide, the easier it is to help.

## 🔧 Fixed a bug?

Nice!  
To submit your fix:

- Open a Pull Request with a clear description of:
  - What was fixed
  - Why it was fixed (if it's not obvious)
  - How to verify the fix
- Link the related issue if one exists

Small, focused PRs are always easier to review 🙂

## 🎨 Cosmetic changes (formatting, whitespace, wording)

Improvements to formatting, styling, or user interface are welcome as long as they:

- Improve readability and UX
- Maintain visual consistency
- Don't break existing functionality

Feel free to open a PR for these kinds of changes.

## ✨ Want to add a feature or improve something?

Before writing code, please:

- Open a **Feature Request** issue and describe your idea
- Wait for feedback before starting implementation
- Discuss how the feature aligns with Bob's educational purpose

This helps ensure efforts are aligned and avoids wasted work.

### Examples of welcome features

- Additional interactive elements or animations
- Improved responsiveness for different devices
- New A-Frame components or integrations
- Accessibility improvements
- Documentation improvements
- Performance optimizations

## 🏷️ Title & naming guidelines

To keep issues and pull requests organized, please use the following prefixes in titles:

### Issue & PR prefixes

- **feat:** a new feature or improvement  
  _Example: `feat: add gesture controls for mobile`_

- **fix:** a bug fix  
  _Example: `fix: HUD not responsive on tablet screens`_

- **docs:** documentation-only changes  
  _Example: `docs: add A-Frame component examples`_

- **style:** CSS, formatting, or visual changes  
  _Example: `style: improve HUD styling on dark backgrounds`_

- **refactor:** code refactoring without feature changes  
  _Example: `refactor: organize component imports`_

- **perf:** performance improvements  
  _Example: `perf: optimize model loading`_

- **chore:** maintenance or tooling changes  
  _Example: `chore: update A-Frame dependencies`_

This helps maintainers quickly understand the purpose of each change.

## 💻 Development Workflow

### Setup

```bash
# Clone and install
git clone https://github.com/Talyslan/bob-3d-virtual-reality.git
cd bob-3d-virtual-reality
pnpm install

# Start development server
pnpm run dev
```

### Testing Your Changes

- Test on various screen sizes (desktop, tablet, mobile)
- Test with different browsers (Chrome, Firefox, Safari)
- If making VR/WebXR changes, test on actual VR devices if possible
- Verify the HUD still displays correctly
- Check that auto-rotation still works as expected

### Build Before Submitting

```bash
pnpm run build
```

Make sure the build completes successfully without errors.

## ❤️ Final notes

- Be respectful and constructive in all interactions
- Keep things simple and practical
- If you're unsure about something, feel free to ask
- Remember: Bob is a learning project, so experimental ideas are welcome!

Thanks again for contributing to Bob! 🚀
