# `formatBytes3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-file-transfer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-file-transfer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777609-777619](../../../../../../../reference/runtime/host-main.cjs#L777609-L777619) | `FunctionDeclaration` | no | `bytes` |
| [evaluation:577304-577314](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577304-L577314) | `FunctionDeclaration` | no | `bytes` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777609-777619](../../../../../../../reference/runtime/host-main.cjs#L777609-L777619) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:577304-577314](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577304-L577314) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:777609

Calls written directly in this body: `Number.isInteger`, `value.toFixed`.

Assignment or increment targets: `unitIndex`, `value`.

SHA-256 of the source span: `d06305fb65e1c7359a45b7a55fc29a3fb4b372a1f2ee12af9252a86f0bf5adbc`.

### evaluation:577304

Calls written directly in this body: `Number.isInteger`, `value.toFixed`.

Assignment or increment targets: `unitIndex`, `value`.

SHA-256 of the source span: `d06305fb65e1c7359a45b7a55fc29a3fb4b372a1f2ee12af9252a86f0bf5adbc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
