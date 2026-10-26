# `statusFromMcpRawServerStatus`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226060-226081](../../../../../../reference/runtime/host-main.cjs#L226060-L226081) | `FunctionDeclaration` | no | `status, { technicalDetail, pendingSignIn } = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226060-226081](../../../../../../reference/runtime/host-main.cjs#L226060-L226081) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:226060

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `3f6cfaa19cd82265798aaed11e8ab2c596ea399f331cd6d82953df953902dd3f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
