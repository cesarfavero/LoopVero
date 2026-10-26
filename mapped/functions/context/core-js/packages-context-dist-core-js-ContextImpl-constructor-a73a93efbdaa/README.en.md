# `../packages/context/dist/core.js/_ContextImpl.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225291-225302](../../../../../reference/runtime/host-main.cjs#L225291-L225302) | `method` | no | `parent, signal, values, name18` |
| [evaluation:1779-1790](../../../../../reference/runtime/sand-eval-runner.cjs#L1779-L1790) | `method` | no | `parent, signal, values, name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225291-225302](../../../../../reference/runtime/host-main.cjs#L225291-L225302) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:1779-1790](../../../../../reference/runtime/sand-eval-runner.cjs#L1779-L1790) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:225291

Calls written directly in this body: `new AbortController`, `new Map`.

Assignment or increment targets: `this.name`, `this.parent`, `this.signal`, `this.values`.

SHA-256 of the source span: `2f459e13a17bac4f925d919e7261781f4d1c78aae8c9df801a70623f9fde40ae`.

### evaluation:1779

Calls written directly in this body: `new AbortController`, `new Map`.

Assignment or increment targets: `this.name`, `this.parent`, `this.signal`, `this.values`.

SHA-256 of the source span: `2f459e13a17bac4f925d919e7261781f4d1c78aae8c9df801a70623f9fde40ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
