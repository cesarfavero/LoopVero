# `errorMessageWithErrorDetailsReason`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725058-725066](../../../../../../../reference/runtime/host-main.cjs#L725058-L725066) | `FunctionDeclaration` | no | `error64` |
| [evaluation:480029-480037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480029-L480037) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725058-725066](../../../../../../../reference/runtime/host-main.cjs#L725058-L725066) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:480029-480037](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480029-L480037) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:725058

Calls written directly in this body: `[computed].details.detail.trim`, `error64.findDetails`, `errorMessage`, `new ConnectError`.

SHA-256 of the source span: `41141765886271342a25c0c3be90f252dce536b1d5597f9f4c064e7349dfc385`.

### evaluation:480029

Calls written directly in this body: `[computed].details.detail.trim`, `error63.findDetails`, `errorMessage2`, `new ConnectError`.

SHA-256 of the source span: `6964af980ed683c5bc5742c1a6a158732d337971e45b8009b33ae6e602a071ed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
