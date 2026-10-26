# `trimRemotePath2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510178-510184](../../../../../../reference/runtime/host-main.cjs#L510178-L510184) | `FunctionDeclaration` | no | `pathname` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510178-510184](../../../../../../reference/runtime/host-main.cjs#L510178-L510184) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:510178

Calls written directly in this body: `.replace`, `normalizedPath.startsWith`, `pathname.replace`.

SHA-256 of the source span: `c98c32acc4cdc9a12a09d257ce0c245f9310401f434310695a517bd5f71c86eb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
