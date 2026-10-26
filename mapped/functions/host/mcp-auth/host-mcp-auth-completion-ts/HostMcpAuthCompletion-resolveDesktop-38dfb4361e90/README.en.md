# `HostMcpAuthCompletion.resolveDesktop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/mcp-auth/host-mcp-auth-completion.ts` · [Module README](../../../../../modules/host/mcp-auth/host-mcp-auth-completion-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786346-786352](../../../../../../reference/runtime/host-main.cjs#L786346-L786352) | `method` | yes | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786346-786352](../../../../../../reference/runtime/host-main.cjs#L786346-L786352) | 0 | 0 | 1 | 0 | 0 | 1 |

### host:786346

Calls written directly in this body: `.management.restart`, `this.deps.getMcp`, `this.resolve`.

SHA-256 of the source span: `730df7d2ae9dced44a8e735a1830de35af6c62ba8dc841ef4a0667828dab8101`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
