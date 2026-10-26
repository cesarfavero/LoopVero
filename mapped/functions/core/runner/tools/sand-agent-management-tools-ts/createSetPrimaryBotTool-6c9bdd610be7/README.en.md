# `createSetPrimaryBotTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757507-757522](../../../../../../../reference/runtime/host-main.cjs#L757507-L757522) | `FunctionDeclaration` | no | `setPrimaryBot` |
| [evaluation:543530-543545](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543530-L543545) | `FunctionDeclaration` | no | `setPrimaryBot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757507-757522](../../../../../../../reference/runtime/host-main.cjs#L757507-L757522) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543530-543545](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543530-L543545) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:757507

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e7eb7929125797ba0ac5be1ff41163530317389e0dcfc0e481456185c2873449`.

### evaluation:543530

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `e7eb7929125797ba0ac5be1ff41163530317389e0dcfc0e481456185c2873449`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
