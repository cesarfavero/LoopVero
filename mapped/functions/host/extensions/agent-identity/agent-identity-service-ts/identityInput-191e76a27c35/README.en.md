# `identityInput`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/agent-identity-service.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496395-496403](../../../../../../../reference/runtime/host-main.cjs#L496395-L496403) | `FunctionDeclaration` | no | `profile` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496395-496403](../../../../../../../reference/runtime/host-main.cjs#L496395-L496403) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:496395

Calls written directly in this body: `clampToMax`, `defaultedName`.

SHA-256 of the source span: `2bde2771ffb229c1446aad9b7e4397fda9de9c8324a7ffcf5a3837cfe24ae31e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
