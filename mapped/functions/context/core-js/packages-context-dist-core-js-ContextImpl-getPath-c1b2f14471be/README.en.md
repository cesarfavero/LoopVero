# `../packages/context/dist/core.js/_ContextImpl.getPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225366-225376](../../../../../reference/runtime/host-main.cjs#L225366-L225376) | `method` | no | `(none)` |
| [evaluation:1854-1864](../../../../../reference/runtime/sand-eval-runner.cjs#L1854-L1864) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225366-225376](../../../../../reference/runtime/host-main.cjs#L225366-L225376) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:1854-1864](../../../../../reference/runtime/sand-eval-runner.cjs#L1854-L1864) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:225366

Calls written directly in this body: `current2.getParent`, `path33.unshift`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `a1d36da83fc6b57c6132880daf0830ffbc02ad08045ea787b637cc9e398344fb`.

### evaluation:1854

Calls written directly in this body: `current2.getParent`, `path33.unshift`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `a1d36da83fc6b57c6132880daf0830ffbc02ad08045ea787b637cc9e398344fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
