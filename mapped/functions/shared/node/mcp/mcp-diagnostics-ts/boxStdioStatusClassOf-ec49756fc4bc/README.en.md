# `boxStdioStatusClassOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/node/mcp/mcp-diagnostics.ts` · [Module README](../../../../../../modules/shared/node/mcp/mcp-diagnostics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226191-226194](../../../../../../../reference/runtime/host-main.cjs#L226191-L226194) | `FunctionDeclaration` | no | `statusDetail` |
| [evaluation:479046-479049](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479046-L479049) | `FunctionDeclaration` | no | `statusDetail` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226191-226194](../../../../../../../reference/runtime/host-main.cjs#L226191-L226194) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479046-479049](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479046-L479049) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226191

Calls written directly in this body: `classifyLocalExecFailure`.

SHA-256 of the source span: `a01b1eb626657935a079bb67dbc20c7bf3a7de5948c32e8ac57e8eb45beec434`.

### evaluation:479046

Calls written directly in this body: `classifyLocalExecFailure`.

SHA-256 of the source span: `a01b1eb626657935a079bb67dbc20c7bf3a7de5948c32e8ac57e8eb45beec434`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
