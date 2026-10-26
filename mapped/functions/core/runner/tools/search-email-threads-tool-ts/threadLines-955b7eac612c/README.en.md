# `threadLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/search-email-threads-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/search-email-threads-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765163-765182](../../../../../../../reference/runtime/host-main.cjs#L765163-L765182) | `FunctionDeclaration` | no | `thread, index` |
| [evaluation:558531-558550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558531-L558550) | `FunctionDeclaration` | no | `thread, index` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765163-765182](../../../../../../../reference/runtime/host-main.cjs#L765163-L765182) | 5 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:558531-558550](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558531-L558550) | 5 | 1 | 0 | 1 | 0 | 0 |

### host:765163

Calls written directly in this body: `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `softenInlineImageMarkers`, `thread.subject.trim`.

SHA-256 of the source span: `ffd518af551c2d6315f238cd94ca9fe50b1fc23fc0cff058799c9cab5c574169`.

### evaluation:558531

Calls written directly in this body: `formatEmailAddress`, `formatEmailAddresses`, `formatEmailDirection`, `formatEmailTimestamp`, `lines2.push`, `softenInlineImageMarkers`, `thread.subject.trim`.

SHA-256 of the source span: `ffd518af551c2d6315f238cd94ca9fe50b1fc23fc0cff058799c9cab5c574169`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
