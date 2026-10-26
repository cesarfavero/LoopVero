# `forwardedSecretsClause`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-tool.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567958-567960](../../../../../../reference/runtime/sand-eval-runner.cjs#L567958-L567960) | `FunctionDeclaration` | no | `secretNames` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567958-567960](../../../../../../reference/runtime/sand-eval-runner.cjs#L567958-L567960) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567958

Calls written directly in this body: `secretNames.join`.

SHA-256 of the source span: `63b43ef645a27a3c10b25be20a9cd4931b048cf90fda93b97f0ba10edb2b6d05`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
