# `HostMcpAuthCompletion.resolve`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `host/mcp-auth/host-mcp-auth-completion.ts` · [Module README](../../../../../modules/host/mcp-auth/host-mcp-auth-completion-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786343-786345](../../../../../../reference/runtime/host-main.cjs#L786343-L786345) | `method` | no | `completion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786343-786345](../../../../../../reference/runtime/host-main.cjs#L786343-L786345) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:786343

Calls written directly in this body: `.noteAuthCompletedElsewhere`, `this.deps.getMcp`.

SHA-256 of the source span: `49b1a3134c8c3511ac994e7e6d78bd70332408c91f7bf4e472094f1116994a97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
