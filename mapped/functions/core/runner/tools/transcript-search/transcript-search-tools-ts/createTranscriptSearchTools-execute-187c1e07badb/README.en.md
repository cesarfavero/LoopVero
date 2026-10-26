# `createTranscriptSearchTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `core/runner/tools/transcript-search/transcript-search-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/transcript-search/transcript-search-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771449-771449](../../../../../../../../reference/runtime/host-main.cjs#L771449-L771449) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [host:771457-771457](../../../../../../../../reference/runtime/host-main.cjs#L771457-L771457) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:570683-570683](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570683-L570683) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:570691-570691](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570691-L570691) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771449-771449](../../../../../../../../reference/runtime/host-main.cjs#L771449-L771449) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:771449 uses an implicit arrow-function return.
| [host:771457-771457](../../../../../../../../reference/runtime/host-main.cjs#L771457-L771457) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:771457 uses an implicit arrow-function return.
| [evaluation:570683-570683](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570683-L570683) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:570683 uses an implicit arrow-function return.
| [evaluation:570691-570691](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L570691-L570691) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:570691 uses an implicit arrow-function return.

### host:771449

Calls written directly in this body: `searchTranscripts`.

SHA-256 of the source span: `c5df79c9d44c5b8c09101b940b3e2e4757af928687d37f547dff63c5ee54495f`.

### host:771457

Calls written directly in this body: `readTranscriptFile`.

SHA-256 of the source span: `111b071073154cfb849e8bf1925131e5a28b4a10686e98e3fa70406e79e3c34e`.

### evaluation:570683

Calls written directly in this body: `searchTranscripts`.

SHA-256 of the source span: `c5df79c9d44c5b8c09101b940b3e2e4757af928687d37f547dff63c5ee54495f`.

### evaluation:570691

Calls written directly in this body: `readTranscriptFile`.

SHA-256 of the source span: `111b071073154cfb849e8bf1925131e5a28b4a10686e98e3fa70406e79e3c34e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
