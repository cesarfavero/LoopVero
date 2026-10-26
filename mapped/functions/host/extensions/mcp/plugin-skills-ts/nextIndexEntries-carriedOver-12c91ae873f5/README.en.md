# `nextIndexEntries/carriedOver`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/plugin-skills.ts` · [Module README](../../../../../../modules/host/extensions/mcp/plugin-skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:701927-701929](../../../../../../../reference/runtime/host-main.cjs#L701927-L701929) | `ArrowFunctionExpression` | no | `entries = []` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701927-701929](../../../../../../../reference/runtime/host-main.cjs#L701927-L701929) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:701927 uses an implicit arrow-function return.

### host:701927

Calls written directly in this body: `entries.filter`.

SHA-256 of the source span: `f2f08938d284748f2df11fbbf5913bcef04c86b111cba4bce4249446282fa86a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
