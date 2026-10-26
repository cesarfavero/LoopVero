# `activityWords`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-project-view.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-project-view-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566343-566346](../../../../../../reference/runtime/sand-eval-runner.cjs#L566343-L566346) | `FunctionDeclaration` | no | `age` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566343-566346](../../../../../../reference/runtime/sand-eval-runner.cjs#L566343-L566346) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:566343

Calls written directly in this body: `cloudAgentAgeWords`, `words.slice`, `words.startsWith`.

SHA-256 of the source span: `7730f6aae8700c78a80cb08ab44caae3ecaeac048a6cd5e05a0aa787dced9993`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
