# `hasForbiddenMcpOAuthRedirectChar`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226032-226038](../../../../../../reference/runtime/host-main.cjs#L226032-L226038) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226032-226038](../../../../../../reference/runtime/host-main.cjs#L226032-L226038) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:226032

Calls written directly in this body: `value.charCodeAt`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `8091115549b88d0c765a4f617d4e99264ddcdf83277168a539d26e0d2380b3f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
