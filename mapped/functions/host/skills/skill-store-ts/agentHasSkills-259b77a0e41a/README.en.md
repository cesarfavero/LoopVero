# `agentHasSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-store.ts` · [Module README](../../../../../modules/host/skills/skill-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720866-720885](../../../../../../reference/runtime/host-main.cjs#L720866-L720885) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720866-720885](../../../../../../reference/runtime/host-main.cjs#L720866-L720885) | 1 | 1 | 0 | 3 | 0 | 2 |

### host:720866

Calls written directly in this body: `entry.isDirectory`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `002ddeaab1700bbd1ee93a6fb386aeaba9c4d546f7f1e0fb42907c3e6ecbd4cb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
