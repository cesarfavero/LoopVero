# `jitteredImageWatchIntervalMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/extension.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681136-681140](../../../../../../../reference/runtime/host-main.cjs#L681136-L681140) | `FunctionDeclaration` | no | `{ intervalMs, ratio }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681136-681140](../../../../../../../reference/runtime/host-main.cjs#L681136-L681140) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:681136

Calls written directly in this body: `Math.max`, `Math.random`, `Math.round`.

SHA-256 of the source span: `e3155b8815dcf19fa9e40e6fb333a93e9dd093a6cc34497a8bec737b63427519`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
