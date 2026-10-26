# `artifactPathRelativeToBoxDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-artifact-plan.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-artifact-plan-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508231-508239](../../../../../../../reference/runtime/host-main.cjs#L508231-L508239) | `FunctionDeclaration` | no | `absolutePath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508231-508239](../../../../../../../reference/runtime/host-main.cjs#L508231-L508239) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:508231

Calls written directly in this body: `absolutePath.slice`, `absolutePath.startsWith`, `isAgentStoreArtifactPath`.

SHA-256 of the source span: `5888d96d2a2ccbb4a12344edaaa01ba429cd4b03bc0abfb969c9188390bf9835`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
