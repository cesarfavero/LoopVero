# `buildCommunicateTool/observingArgsRejections`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725192-725225](../../../../../../../reference/runtime/host-main.cjs#L725192-L725225) | `FunctionDeclaration` | no | `{     onArgsRejected,     schemaVariant,     knownFields   }` |
| [evaluation:480163-480196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480163-L480196) | `FunctionDeclaration` | no | `{     onArgsRejected,     schemaVariant,     knownFields   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725192-725225](../../../../../../../reference/runtime/host-main.cjs#L725192-L725225) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480163-480196](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480163-L480196) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725192

Calls written directly in this body: `argIssueFolder`.

SHA-256 of the source span: `acd51627feadd4bedd4d8326a8667be421fcf90aa9ae09a22cd6d55581125b59`.

### evaluation:480163

Calls written directly in this body: `argIssueFolder`.

SHA-256 of the source span: `4b53e145530613c53c233f3c36f3c98bd7db0fcb01d32bdde07ed08758e08f87`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
