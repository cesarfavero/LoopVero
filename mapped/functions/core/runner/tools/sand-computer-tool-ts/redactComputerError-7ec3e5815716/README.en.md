# `redactComputerError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777261-777268](../../../../../../../reference/runtime/host-main.cjs#L777261-L777268) | `FunctionDeclaration` | yes | `ctx, result, guard` |
| [evaluation:576906-576913](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576906-L576913) | `FunctionDeclaration` | yes | `ctx, result, guard` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777261-777268](../../../../../../../reference/runtime/host-main.cjs#L777261-L777268) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:576906-576913](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576906-L576913) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:777261

Calls written directly in this body: `guard.textRedactor`, `new ComputerUseResult`, `redact`, `result.result.value.clone`.

Assignment or increment targets: `error64.error`.

SHA-256 of the source span: `6727f95a7f131d74b6d75b9d26fcc227f2ebdddeb348f20ccea1690a63c6eb6f`.

### evaluation:576906

Calls written directly in this body: `guard.textRedactor`, `new ComputerUseResult`, `redact`, `result.result.value.clone`.

Assignment or increment targets: `error63.error`.

SHA-256 of the source span: `948f300cd56c1f790be5daac85394175b1e881fc322479de072bb43d818235bb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
