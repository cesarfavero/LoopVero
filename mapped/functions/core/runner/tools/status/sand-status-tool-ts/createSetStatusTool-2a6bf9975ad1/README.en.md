# `createSetStatusTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/status/sand-status-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/status/sand-status-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:740891-740903](../../../../../../../../reference/runtime/host-main.cjs#L740891-L740903) | `FunctionDeclaration` | no | `status` |
| [evaluation:480246-480258](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480246-L480258) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:740891-740903](../../../../../../../../reference/runtime/host-main.cjs#L740891-L740903) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480246-480258](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L480246-L480258) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:740891

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `b9da698d1823c8b6b5bf4bf4579bfd5601710b6651d677b607504843af0c506b`.

### evaluation:480246

Calls written directly in this body: `defineZod4CommunicateTool`.

SHA-256 of the source span: `b9da698d1823c8b6b5bf4bf4579bfd5601710b6651d677b607504843af0c506b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
