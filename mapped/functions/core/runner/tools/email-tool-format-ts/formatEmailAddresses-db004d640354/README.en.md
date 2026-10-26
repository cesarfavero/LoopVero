# `formatEmailAddresses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-tool-format.ts` · [Module README](../../../../../../modules/core/runner/tools/email-tool-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764145-764147](../../../../../../../reference/runtime/host-main.cjs#L764145-L764147) | `FunctionDeclaration` | no | `addresses` |
| [evaluation:557516-557518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557516-L557518) | `FunctionDeclaration` | no | `addresses` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764145-764147](../../../../../../../reference/runtime/host-main.cjs#L764145-L764147) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:557516-557518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557516-L557518) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:764145

Calls written directly in this body: `.join`, `addresses.map`.

SHA-256 of the source span: `c01f5ea050e7b24dd2d4305c178da8b8ae3492359e924e10ca1d96427c9db857`.

### evaluation:557516

Calls written directly in this body: `.join`, `addresses.map`.

SHA-256 of the source span: `c01f5ea050e7b24dd2d4305c178da8b8ae3492359e924e10ca1d96427c9db857`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
