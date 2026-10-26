# `withSubagentHistoryLookup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/subagents/README.en.md).

**Module:** `core/runner/tool-policy/manifests/subagent-history.ts` · [Module README](../../../../../../../modules/core/runner/tool-policy/manifests/subagent-history-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757182-757206](../../../../../../../../reference/runtime/host-main.cjs#L757182-L757206) | `FunctionDeclaration` | no | `base, options2` |
| [evaluation:543120-543144](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L543120-L543144) | `FunctionDeclaration` | no | `base, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757182-757206](../../../../../../../../reference/runtime/host-main.cjs#L757182-L757206) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:543120-543144](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L543120-L543144) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:757182

Calls written directly in this body: `extendAgentTools`.

SHA-256 of the source span: `2b858e9e5db84e06e2483cf3d2eab3830fbe0854741e41b8d7fc5484aac49eda`.

### evaluation:543120

Calls written directly in this body: `extendAgentTools`.

SHA-256 of the source span: `2b858e9e5db84e06e2483cf3d2eab3830fbe0854741e41b8d7fc5484aac49eda`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
