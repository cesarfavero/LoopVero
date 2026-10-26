# `createUpdateAgentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757480-757503](../../../../../../../reference/runtime/host-main.cjs#L757480-L757503) | `FunctionDeclaration` | no | `management` |
| [evaluation:543503-543526](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543503-L543526) | `FunctionDeclaration` | no | `management` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757480-757503](../../../../../../../reference/runtime/host-main.cjs#L757480-L757503) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543503-543526](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543503-L543526) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:757480

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `18b24be0c9cff8db34d5715cb970ad190d23352943b06f3d817ffe66732c7f0e`.

### evaluation:543503

Calls written directly in this body: `defineCommunicateTool`.

SHA-256 of the source span: `18b24be0c9cff8db34d5715cb970ad190d23352943b06f3d817ffe66732c7f0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
