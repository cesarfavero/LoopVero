# `storedPrState`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-fields.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-fields-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:508942-508944](../../../../../../reference/runtime/host-main.cjs#L508942-L508944) | `FunctionDeclaration` | no | `status` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:508942-508944](../../../../../../reference/runtime/host-main.cjs#L508942-L508944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:508942

Calls written directly in this body: `asStoredPrState`, `mapProtoPrStatus`.

SHA-256 of the source span: `908f941ebff0bb1f4a66f98aaa8b4c5afb5e4cfe26eea22ae426450cc9ff0fae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
