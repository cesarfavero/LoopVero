# `isAgentStoreFileCitation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/cloud-agent-artifact-citation.ts` · [Module README](../../../../../modules/shared/agents/cloud-agent-artifact-citation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508189-508197](../../../../../../reference/runtime/host-main.cjs#L508189-L508197) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508189-508197](../../../../../../reference/runtime/host-main.cjs#L508189-L508197) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:508189

Calls written directly in this body: `AGENT_STORE_FILE_CITATION.exec`, `fileName2.includes`, `relativePath.split`, `segments.at`, `segments.every`.

SHA-256 of the source span: `51eb916c0f403fd69c35e0313869a76c8dc70e71cc348dfc62586e7088e4f449`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
