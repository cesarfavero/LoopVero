# `stampProfileServerBinding`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/agents/agent-files.ts` · [Module README](../../../../../modules/core/agents/agent-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:629063-629075](../../../../../../reference/runtime/sand-eval-runner.cjs#L629063-L629075) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629063-629075](../../../../../../reference/runtime/sand-eval-runner.cjs#L629063-L629075) | 5 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629063

Calls written directly in this body: `parseProfileJson`, `profileConfigFromJson`, `profileServerBindingFromJson`, `serializeSandProfileFile`.

SHA-256 of the source span: `17f3a5bdacdbf1d131757a92056676d8071cb5561a4d4b07071d372089fe038b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
