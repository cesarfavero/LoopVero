# `requireField2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567961-567967](../../../../../../reference/runtime/sand-eval-runner.cjs#L567961-L567967) | `FunctionDeclaration` | no | `value, name18, action` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567961-567967](../../../../../../reference/runtime/sand-eval-runner.cjs#L567961-L567967) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:567961

Calls written directly in this body: `new SandCloudAgentToolInputError`, `value.trim`.

Explicit throw targets: `SandCloudAgentToolInputError`.

SHA-256 of the source span: `4d78565712b17dcb60e3d0615a881900abdbd2faa1e0607838b5fc27e326afd0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
