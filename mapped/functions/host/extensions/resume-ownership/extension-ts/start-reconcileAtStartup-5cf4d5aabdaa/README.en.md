# `start/reconcileAtStartup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/resume-ownership/extension.ts` · [Module README](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:708910-708910](../../../../../../../reference/runtime/host-main.cjs#L708910-L708910) | `ArrowFunctionExpression` | no | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708910-708910](../../../../../../../reference/runtime/host-main.cjs#L708910-L708910) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:708910 uses an implicit arrow-function return.

### host:708910

Calls written directly in this body: `identity.reconcileBeforeStartupResume`.

SHA-256 of the source span: `a0472bfcadb58c827d576970f194d3d30bd2a89aba4c7f72985ad1fa7bdc80df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
