# `listConventionalAvatarFilenames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716744-716753](../../../../../../reference/runtime/host-main.cjs#L716744-L716753) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716744-716753](../../../../../../reference/runtime/host-main.cjs#L716744-L716753) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:716744

Calls written directly in this body: `reportFallbackUnlessAbsent`, `sortConventionalAvatarFilenames`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `ccdd4a3de9c51b04c4fceb4d03263d81afe943be5e55eb81a79db2a606b1fb2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
