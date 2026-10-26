# `checkedName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/claim-email-inbox-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/claim-email-inbox-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764823-764830](../../../../../../../reference/runtime/host-main.cjs#L764823-L764830) | `FunctionDeclaration` | no | `requested` |
| [evaluation:558191-558198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558191-L558198) | `FunctionDeclaration` | no | `requested` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764823-764830](../../../../../../../reference/runtime/host-main.cjs#L764823-L764830) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:558191-558198](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558191-L558198) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:764823

Calls written directly in this body: `parseClaimEmailUsername`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `6895a01f551287167a9a9b6df36d1ed9b26db8aaa628ec11a06f325d56204100`.

### evaluation:558191

Calls written directly in this body: `parseClaimEmailUsername`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `3c67e24b6c66632d8a52b3dd0ca5a175f4514dae0b185a5f8c795b701964db6d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
