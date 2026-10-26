# `SandHost.startWithLifecycle/this.stopResumeOwnership`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-host.ts` · [Module README](../../../../modules/host/sand-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786540-786540](../../../../../reference/runtime/host-main.cjs#L786540-L786540) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786540-786540](../../../../../reference/runtime/host-main.cjs#L786540-L786540) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786540 uses an implicit arrow-function return.

### host:786540

Calls written directly in this body: `resumeOwnership.stop`.

SHA-256 of the source span: `1cdda1c19efc73ad38106e311b71ff9765b4e7544332b8cbc4e230481925d0ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
