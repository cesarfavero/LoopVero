# `parseTree2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742786-742799](../../../../../../reference/runtime/host-main.cjs#L742786-L742799) | `FunctionDeclaration` | no | `lines2` |
| [evaluation:515448-515461](../../../../../../reference/runtime/sand-eval-runner.cjs#L515448-L515461) | `FunctionDeclaration` | no | `lines2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742786-742799](../../../../../../reference/runtime/host-main.cjs#L742786-L742799) | 1 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:515448-515461](../../../../../../reference/runtime/sand-eval-runner.cjs#L515448-L515461) | 1 | 2 | 0 | 1 | 0 | 0 |

### host:742786

Calls written directly in this body: `line.slice`, `line.trimStart`, `parent.children.push`, `parseNode`, `roots.push`, `stack.pop`, `stack.push`.

SHA-256 of the source span: `2224183f0fd28ed9b327ecb335b6fcdb77887aa2facea95df82626fad4727605`.

### evaluation:515448

Calls written directly in this body: `line.slice`, `line.trimStart`, `parent.children.push`, `parseNode`, `roots.push`, `stack.pop`, `stack.push`.

SHA-256 of the source span: `2224183f0fd28ed9b327ecb335b6fcdb77887aa2facea95df82626fad4727605`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
