# `resolve30`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-sort-memories-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-sort-memories-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754246-754266](../../../../../../../reference/runtime/host-main.cjs#L754246-L754266) | `FunctionDeclaration` | no | `{   facts,   from: from2,   settledIn }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754246-754266](../../../../../../../reference/runtime/host-main.cjs#L754246-L754266) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:754246

Calls written directly in this body: `destination.get`, `destination.has`, `found.set`, `found.values`, `indexFacts`, `memoryIdFor`, `missing.push`, `new Map`, `settled.set`, `settled.values`, `source.get`, `source.has`.

SHA-256 of the source span: `fb2f5f20ba8253f4acaa8a6dc4df862b4a4a844b11a483cc4ff1aa2ebcf72150`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
