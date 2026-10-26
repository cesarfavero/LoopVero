# `isPathWithin4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716792-716795](../../../../../../reference/runtime/host-main.cjs#L716792-L716795) | `FunctionDeclaration` | no | `dir, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716792-716795](../../../../../../reference/runtime/host-main.cjs#L716792-L716795) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:716792

Calls written directly in this body: `rel.startsWith`.

SHA-256 of the source span: `04be6ef21ac1775efa3de82e7c0a243ce2be62071f79b0ff2a0808b192c3b42b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
