# `withProvenanceDefaults`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/plugin-skills-cache.ts` · [Module README](../../../../../modules/host/skills/plugin-skills-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684289-684298](../../../../../../reference/runtime/host-main.cjs#L684289-L684298) | `FunctionDeclaration` | no | `record3, pluginsRoot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684289-684298](../../../../../../reference/runtime/host-main.cjs#L684289-L684298) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:684289

Calls written directly in this body: `isPathWithin`, `positiveIdOrNull`.

SHA-256 of the source span: `4f560e4426b7132d34bca69ac329acea696b6e10ee10b90f8665d127c85c4377`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
