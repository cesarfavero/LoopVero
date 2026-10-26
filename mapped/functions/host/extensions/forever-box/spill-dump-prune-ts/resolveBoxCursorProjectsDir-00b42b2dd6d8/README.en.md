# `resolveBoxCursorProjectsDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/spill-dump-prune.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/spill-dump-prune-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680866-680872](../../../../../../../reference/runtime/host-main.cjs#L680866-L680872) | `FunctionDeclaration` | no | `cursorDataDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680866-680872](../../../../../../../reference/runtime/host-main.cjs#L680866-L680872) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:680866

Calls written directly in this body: `cursorDataDir.trim`.

SHA-256 of the source span: `0a38bec1e57e28f5b57bd1f8947a86007f5a6eb7dd6d93d068d045ef3e6e84ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
