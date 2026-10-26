# `isAgentId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/ids.ts` · [Module README](../../../../modules/shared/ids-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476773-476775](../../../../../reference/runtime/host-main.cjs#L476773-L476775) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476773-476775](../../../../../reference/runtime/host-main.cjs#L476773-L476775) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476773

Calls written directly in this body: `raw.includes`, `raw.trim`.

SHA-256 of the source span: `938ff8cff6d298fbcc1c31dcec3a86023b57838e42ef5ec72afbe387b168ea60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
