# `adminLockLimit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/in-app-links-guidance.ts` · [Module README](../../../../../modules/core/runner/in-app-links-guidance-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:557683-557686](../../../../../../reference/runtime/host-main.cjs#L557683-L557686) | `FunctionDeclaration` | no | `row, facts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557683-557686](../../../../../../reference/runtime/host-main.cjs#L557683-L557686) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:557683

Calls written directly in this body: `adminLockRead`.

SHA-256 of the source span: `084e36492e48707f2a94a9393cdc27cc574647869c5bf2cb0e21e607cc2e5c97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
