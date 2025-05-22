+++
date = '2025-05-22T07:14:21-04:00'
title = 'Better Tasks'
tags = ['Neovim', 'Coding', 'Writing', 'Productivity']
+++

# Better Tasks Neovim Plugin

**Better Tasks** is a lightweight, modular and opinionated Neovim plugin for managing Markdown-based task lists across your notes, journals, or project files. It adds intuitive task management commands, persistent storage, status highlighting, and upcoming fuzzy-finding and popup UIs.

As always, you can find out more about this [project](https://github.com/MistbornOne/better-tasks.nvim) and all my projects in my [GitHub](https://github.com/MistbornOne).

---

## 💡 Task Structure

As you can see below, the tasks can be formatted into a table-like structure (not truly a table due to markdown limitations) that allow you to quickly see your tasks at a glance and view them through the perspective of title, due date, category, or status.

![Screenshot of Formatted Tasks](/images/better-tasks-formatted.jpg)

---

## ✨ Features

- 📋 Create new tasks with due dates, categories, and statuses in your current buffer _and_ automatically in your master open tasks list
- ✅ Mark tasks as done and automatically archive them
- 📚 Sort tasks in current buffer with all done tasks on top, open tasks on bottom, with option to sort via due date or status
- 🗂️ Custom categories and statuses with persistent JSON storage
- 🧠 Virtual text highlighting for status, category, and due date
- 📅 Popup prompt to edit status and due date inline
- 📁 Archive completed tasks by date and source automatically
- 📝 Format tasks like a table view in current buffer
- 🔍 Telescope and FZF integration (on roadmap)

---

## 📦 Installation

Using [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
return
{
  "MistbornOne/better-tasks.nvim",
  config = function()
    require("better-tasks").setup()
  end,
}
```

Using [packer.nvim](https://github.com/wbthomason/packer.nvim)

```lua
use({
  "MistbornOne/better-tasks.nvim",
  config = function()
    require("better-tasks").setup()
  end,
})

```

Using [vim-plug](https://github.com/junegunn/vim-plug)

```lua
Plug 'MistbornOne/better-tasks.nvim'

```

Then in your Lua config (after plugins are loaded):

```lua
require("better-tasks").setup()

```

---

## ⚙️ Configuration

```lua
require("better-tasks").setup({
  master_task_file = "~/Tasks/Master.md",
  archive_file = "~/Tasks/Archive.md",
  options = {
    show_notifications = true,
    categories = { "Life", "Work", "Coding" },
    statuses = {
      ["TODO"] = "🆕",
      ["In Progress"] = "🌱",
      ["Stalled"] = "🛑",
      ["Cancel"] = "🚫",
      ["Done"] = "✅",
    },
  }
})
```

---

## 👨🏼‍💻 Usage

**Keymaps (Defaults)**

| Mapping       | Action                    |
| ------------- | ------------------------- |
| `<leader>tn`  | Insert new task           |
| `<leader>td`  | Mark current task as done |
| `<leader>tt`  | Change status via popup   |
| `<leader>tw`  | Change due date via popup |
| `<leader>ss`  | Sort open tasks by status |
| `<leader>sd`  | Sort open tasks by date   |
| `<leader>tm`  | View Master List (Popup)  |
| `<leader>ta`  | View Archive List (Popup) |
| `<leader>fmt` | Format As Table in Buffer |

---

## 🔧 Roadmap

1. Telescope/FZF Integration
2. De-dupe enhancements
3. Task structure enhancements

---

📝 License

[MIT](https://github.com/MistbornOne/better-tasks.nvim/blob/main/LICENSE) © Ian Watkins
