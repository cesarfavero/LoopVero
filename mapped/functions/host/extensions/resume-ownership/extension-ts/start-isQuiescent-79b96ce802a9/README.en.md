# `start/isQuiescent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708905-708905](../../../../../../../reference/runtime/host-main.cjs#L708905-L708905) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708905-708905](../../../../../../../reference/runtime/host-main.cjs#L708905-L708905) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708905 uses an implicit arrow-function return.

### host:708905

Calls written directly in this body: `transcript.getPauseState`.

SHA-256 of the source span: `36fe43ce5c56ebd854cfe71f511c7456fadf10d3d3b266babe5b8eba8e36eac7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
