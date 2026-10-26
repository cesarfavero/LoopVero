# `collapseWrappers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742811-742830](../../../../../../reference/runtime/host-main.cjs#L742811-L742830) | `FunctionDeclaration` | no | `roots` |
| [evaluation:515473-515492](../../../../../../reference/runtime/sand-eval-runner.cjs#L515473-L515492) | `FunctionDeclaration` | no | `roots` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742811-742830](../../../../../../reference/runtime/host-main.cjs#L742811-L742830) | 1 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:515473-515492](../../../../../../reference/runtime/sand-eval-runner.cjs#L515473-L515492) | 1 | 2 | 0 | 0 | 0 | 0 |

### host:742811

Calls written directly in this body: `isCollapsibleWrapper`, `walk3`.

Assignment or increment targets: `changed`, `node2.skip`.

SHA-256 of the source span: `3e0335589b4149f69a940b3fb60da0186888c3ba5e9f61616703803015bb186c`.

### evaluation:515473

Calls written directly in this body: `isCollapsibleWrapper`, `walk3`.

Assignment or increment targets: `changed`, `node2.skip`.

SHA-256 of the source span: `3e0335589b4149f69a940b3fb60da0186888c3ba5e9f61616703803015bb186c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
