# `communicateToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/first-party-mocks/bind-tool-mocks.ts` · [Module README](../../../../../../../modules/core/runner/tools/first-party-mocks/bind-tool-mocks-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555934-555944](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555934-L555944) | `FunctionDeclaration` | no | `args, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555934-555944](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555934-L555944) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:555934

Calls written directly in this body: `JSON.stringify`, `new CommunicateUpdateArgs`, `new CommunicateUpdateToolCall`, `new ToolCall`.

SHA-256 of the source span: `a24758b34793425fff5896df1d41a32564a485370c9ae6b9f282ea0b4a997ced`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
