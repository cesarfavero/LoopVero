# `citedCloudAgentArtifactPaths`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/cloud-agent-artifact-citation.ts` · [Module README](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508210-508218](../../../../../../reference/runtime/host-main.cjs#L508210-L508218) | `FunctionDeclaration` | no | `text3, paths` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508210-508218](../../../../../../reference/runtime/host-main.cjs#L508210-L508218) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508210

Calls written directly in this body: `citedFileTokens`, `paths.filter`.

SHA-256 of the source span: `650093e074c80e6f55d4eafedb84b11b95775ceacccf62051d4c0573f244f7e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
