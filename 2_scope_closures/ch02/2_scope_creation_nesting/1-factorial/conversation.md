---
Characters:
  - Compiler(C)
  - Engine (E)
  - Scope Manager<instance>(SM<instance>)
---

# Compiler - Scope Manager(s)

| Character  | Phrase                                                 |
| ---------- | ------------------------------------------------------ |
| C          | Hola SM<global>, conoces al identificador _factorial_? |
| SM<global> |                                                        |

# Engine - Scope Manager(s)

| Character  | Phrase                                                 |
| ---------- | ------------------------------------------------------ |
| E          | Hola SM<global>, conoces al identificador _factorial_? |
| SM<global> | Sí, aquí está la variable                              |
| E          | Vale, inicializo la variable con esta función          |
| E          | SM<global> ...                                         |
