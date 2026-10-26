# `withResolvedBotTemplateAudience`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/agents/bot-templates.ts` · [Module README](../../../../../modules/shared/agents/bot-templates-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:484894-484912](../../../../../../reference/runtime/host-main.cjs#L484894-L484912) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:484894-484912](../../../../../../reference/runtime/host-main.cjs#L484894-L484912) | 5 | 0 | 0 | 5 | 0 | 0 |

### host:484894

Calls written directly in this body: `laterAudienceNumber`, `resolveBotTemplateAudienceVisibility`.

SHA-256 of the source span: `71fc08a4e8bd8d9916e0276f9f2f0b6db4ae04efdcd9f29f15c415aa181dd6e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
