# `createCreateBotShareJsonTool/description`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-bot-share-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-bot-share-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:771202-771205](../../../../../../../reference/runtime/host-main.cjs#L771202-L771205) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:570436-570439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570436-L570439) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771202-771205](../../../../../../../reference/runtime/host-main.cjs#L771202-L771205) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:771202 uses an implicit arrow-function return.
| [evaluation:570436-570439](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570436-L570439) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:570436 uses an implicit arrow-function return.

### host:771202

Calls written directly in this body: `createBotShareJsonDescription`, `deps.isGettingStartedEnabled`, `deps.peekShareScope`, `deps.share.peekShareScope`.

SHA-256 of the source span: `d12fd3b79ed65e43c2b71334a83ebbe5c718fd199909e0239cb39ccf4e6b6e54`.

### evaluation:570436

Calls written directly in this body: `createBotShareJsonDescription`, `deps.isGettingStartedEnabled`, `deps.peekShareScope`, `deps.share.peekShareScope`.

SHA-256 of the source span: `d12fd3b79ed65e43c2b71334a83ebbe5c718fd199909e0239cb39ccf4e6b6e54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
