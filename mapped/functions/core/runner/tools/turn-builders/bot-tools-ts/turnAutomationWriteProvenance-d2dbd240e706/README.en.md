# `turnAutomationWriteProvenance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/bot-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/bot-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:772085-772087](../../../../../../../../reference/runtime/host-main.cjs#L772085-L772087) | `FunctionDeclaration` | no | `host` |
| [evaluation:571318-571320](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571318-L571320) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772085-772087](../../../../../../../../reference/runtime/host-main.cjs#L772085-L772087) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571318-571320](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571318-L571320) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:772085

Calls written directly in this body: `host.activeTurnRequestSource`, `host.automationWriteProvenance`, `host.trustsAutomationWrites`, `sandAutomationWriteProvenance`.

SHA-256 of the source span: `17e47336daf7b0326f6556e1969cb37002d0f8b4d1fdd8ba464250b56447b66e`.

### evaluation:571318

Calls written directly in this body: `host.activeTurnRequestSource`, `host.automationWriteProvenance`, `host.trustsAutomationWrites`, `sandAutomationWriteProvenance`.

SHA-256 of the source span: `17e47336daf7b0326f6556e1969cb37002d0f8b4d1fdd8ba464250b56447b66e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
