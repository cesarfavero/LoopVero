# `noteToolTargetHost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/action-audit/tool-result-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/tool-result-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699189-699191](../../../../../../../reference/runtime/host-main.cjs#L699189-L699191) | `FunctionDeclaration` | no | `ctx, toolCallId, target` |
| [evaluation:489764-489766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489764-L489766) | `FunctionDeclaration` | no | `ctx, toolCallId, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699189-699191](../../../../../../../reference/runtime/host-main.cjs#L699189-L699191) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:489764-489766](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489764-L489766) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:699189

Calls written directly in this body: `.note`, `ctx.get`.

SHA-256 of the source span: `f6ad04bcba286decf402fe7b5737505e4a05dffe5c70c4c3dbd94c21bbf642a5`.

### evaluation:489764

Calls written directly in this body: `.note`, `ctx.get`.

SHA-256 of the source span: `f6ad04bcba286decf402fe7b5737505e4a05dffe5c70c4c3dbd94c21bbf642a5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
