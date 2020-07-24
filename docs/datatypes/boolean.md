---
id: boolean
title: Data Type Boolean
sidebar_label: Boolean
---

## Lua internal
A boolean has two values, **true** or **false**. Variables with **nil** or **false** will be handled as **false**, everything else will be handled as **true**.

Unlike other programming languages, Lua considers **zero** & **empty strings** also as true. ([src](http://lua.org/pil/2.2.html))

```lua
x = true
print(x) -- prints true

x = false
print(x) -- prints false
```