# `RosterSearch.searchMedia`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/roster-search.ts` · [Module README](../../../../../../modules/host/extensions/transcript/roster-search-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:739191-739199](../../../../../../../reference/runtime/host-main.cjs#L739191-L739199) | `method` | yes | `query2, limit3 = this.tm.contentSearch.maxResults` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:739191-739199](../../../../../../../reference/runtime/host-main.cjs#L739191-L739199) | 2 | 0 | 1 | 1 | 2 | 0 |

### host:739191

Calls written directly in this body: `matches.filter`, `new SandSearchUnavailableError`, `query2.trim`, `this.tm.contentSearch.searchMedia`.

Explicit throw targets: `SandSearchUnavailableError`.

SHA-256 of the source span: `9876673eea8c4811beed0b18bb73efb9477859c840695f9156c0760dbe1b6e0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
