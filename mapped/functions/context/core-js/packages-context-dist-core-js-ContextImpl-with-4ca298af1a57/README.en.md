# `../packages/context/dist/core.js/_ContextImpl.with`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/core.js` · [Module README](../../../../modules/context/core-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225318-225322](../../../../../reference/runtime/host-main.cjs#L225318-L225322) | `method` | no | `key, value` |
| [evaluation:1806-1810](../../../../../reference/runtime/sand-eval-runner.cjs#L1806-L1810) | `method` | no | `key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225318-225322](../../../../../reference/runtime/host-main.cjs#L225318-L225322) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1806-1810](../../../../../reference/runtime/sand-eval-runner.cjs#L1806-L1810) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225318

Calls written directly in this body: `new Map`, `new _ContextImpl`, `newValues.set`.

SHA-256 of the source span: `983c0c96072157c1b7c569288c94821f8eaef1c70635ecfcf3c5adbec092546b`.

### evaluation:1806

Calls written directly in this body: `new Map`, `new _ContextImpl`, `newValues.set`.

SHA-256 of the source span: `983c0c96072157c1b7c569288c94821f8eaef1c70635ecfcf3c5adbec092546b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
