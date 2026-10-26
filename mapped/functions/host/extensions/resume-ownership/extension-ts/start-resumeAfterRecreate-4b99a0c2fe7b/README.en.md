# `start/resumeAfterRecreate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708913-708913](../../../../../../../reference/runtime/host-main.cjs#L708913-L708913) | `ArrowFunctionExpression` | no | `(none)` |
| [host:708938-708938](../../../../../../../reference/runtime/host-main.cjs#L708938-L708938) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708913-708913](../../../../../../../reference/runtime/host-main.cjs#L708913-L708913) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708913 uses an implicit arrow-function return.
| [host:708938-708938](../../../../../../../reference/runtime/host-main.cjs#L708938-L708938) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708938 uses an implicit arrow-function return.

### host:708913

Calls written directly in this body: `transcript.resumeAfterRecreate`.

SHA-256 of the source span: `c47856c3bfd84f3cee5991f9a591911dd7c804978a142398062a1bdd5502ef81`.

### host:708938

Calls written directly in this body: `service.resumeAfterRecreate`.

SHA-256 of the source span: `2102593da135066772bfa3b6daae5680e52fdeaa0394fbf3a24a58f5c6d54d6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
