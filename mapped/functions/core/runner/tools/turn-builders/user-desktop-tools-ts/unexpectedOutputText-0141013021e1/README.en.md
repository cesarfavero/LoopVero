# `unexpectedOutputText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781768-781772](../../../../../../../../reference/runtime/host-main.cjs#L781768-L781772) | `FunctionDeclaration` | no | `raw` |
| [evaluation:582113-582117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582113-L582117) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781768-781772](../../../../../../../../reference/runtime/host-main.cjs#L781768-L781772) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:582113-582117](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582113-L582117) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:781768

Calls written directly in this body: `JSON.stringify`, `String`, `text3.slice`.

SHA-256 of the source span: `b0fa7ac28168ec7714c626d78491977166ed12acd05bcf0b99213cca16ad1305`.

### evaluation:582113

Calls written directly in this body: `JSON.stringify`, `String`, `text3.slice`.

SHA-256 of the source span: `b0fa7ac28168ec7714c626d78491977166ed12acd05bcf0b99213cca16ad1305`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
