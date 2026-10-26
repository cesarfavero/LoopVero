# `holdsLink`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453642-453648](../../../../../reference/runtime/host-main.cjs#L453642-L453648) | `FunctionDeclaration` | yes | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453642-453648](../../../../../reference/runtime/host-main.cjs#L453642-L453648) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:453642

Calls written directly in this body: `.catch`, `info2.isSymbolicLink`.

SHA-256 of the source span: `a1774abf0120f9371bc6dbc81105b9a7c3dfbf08baa0d22b4b8b05726baa79cc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
