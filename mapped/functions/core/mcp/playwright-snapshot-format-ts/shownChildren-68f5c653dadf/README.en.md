# `shownChildren`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742800-742802](../../../../../../reference/runtime/host-main.cjs#L742800-L742802) | `FunctionDeclaration` | no | `node2` |
| [evaluation:515462-515464](../../../../../../reference/runtime/sand-eval-runner.cjs#L515462-L515464) | `FunctionDeclaration` | no | `node2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742800-742802](../../../../../../reference/runtime/host-main.cjs#L742800-L742802) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515462-515464](../../../../../../reference/runtime/sand-eval-runner.cjs#L515462-L515464) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742800

Calls written directly in this body: `node2.children.flatMap`.

SHA-256 of the source span: `2c035df1ce8876c0c8a8b2896877b3b347952b4a4a571a9b32f9b3a31705f6e0`.

### evaluation:515462

Calls written directly in this body: `node2.children.flatMap`.

SHA-256 of the source span: `2c035df1ce8876c0c8a8b2896877b3b347952b4a4a571a9b32f9b3a31705f6e0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
