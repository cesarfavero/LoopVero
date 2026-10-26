# `writeRefusalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-app-secrets.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-app-secrets-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538025-538035](../../../../../../../reference/runtime/host-main.cjs#L538025-L538035) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538025-538035](../../../../../../../reference/runtime/host-main.cjs#L538025-L538035) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:538025

Calls written directly in this body: `appSecretsRefusedOf`, `details.detail.trim`, `error64.findDetails`, `refusalOf`.

SHA-256 of the source span: `c07485110e486440d8313850c5174937f3db6c27721721250dbe2f61063c5827`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
