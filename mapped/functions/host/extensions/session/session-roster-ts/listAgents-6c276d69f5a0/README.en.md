# `listAgents`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-roster.ts` · [Module README](../../../../../../modules/host/extensions/session/session-roster-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:722901-722989](../../../../../../../reference/runtime/host-main.cjs#L722901-L722989) | `FunctionDeclaration` | yes | `host, activeAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:722901-722989](../../../../../../../reference/runtime/host-main.cjs#L722901-L722989) | 1 | 0 | 2 | 2 | 1 | 1 |

### host:722901

Calls written directly in this body: `.map`, `.sort`, `Promise.all`, `entries.map`, `host.pruneExtrasCache`, `keepAgentDirs`, `new Set`, `summaries.filter`.

Assignment or increment targets: `entries`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `3d4a8b9695ed9e12f7da2330579712209667154de2aec66ef7991a7ce367afcf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
