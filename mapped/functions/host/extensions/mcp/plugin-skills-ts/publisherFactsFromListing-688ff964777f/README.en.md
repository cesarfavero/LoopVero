# `publisherFactsFromListing`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701758-701771](../../../../../../../reference/runtime/host-main.cjs#L701758-L701771) | `FunctionDeclaration` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701758-701771](../../../../../../../reference/runtime/host-main.cjs#L701758-L701771) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:701758

Calls written directly in this body: `byPluginId.set`, `new Map`, `plugin.id.toString`.

SHA-256 of the source span: `97b501fae0458fbdfae5f3e5596ae3e4f18cc44ed9e2f7e832651ced4415d289`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
