# `contentDedupeKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/trays/trays-service.ts` · [Module README](../../../../../../modules/host/extensions/trays/trays-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:784385-784422](../../../../../../../reference/runtime/host-main.cjs#L784385-L784422) | `FunctionDeclaration` | no | `{   agentId,   title,   errorKind,   actions: actions2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:784385-784422](../../../../../../../reference/runtime/host-main.cjs#L784385-L784422) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:784385

Calls written directly in this body: `.map`, `JSON.stringify`.

SHA-256 of the source span: `7968ef0018b1787788a0045441a0feac21d52263744ce23347ce6b3e7c3ba1c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
