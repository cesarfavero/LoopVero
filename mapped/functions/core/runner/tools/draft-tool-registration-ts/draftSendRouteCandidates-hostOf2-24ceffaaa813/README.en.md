# `draftSendRouteCandidates/hostOf2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756029-756029](../../../../../../../reference/runtime/host-main.cjs#L756029-L756029) | `ArrowFunctionExpression` | no | `providerIdentifier` |
| [evaluation:541917-541917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541917-L541917) | `ArrowFunctionExpression` | no | `providerIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756029-756029](../../../../../../../reference/runtime/host-main.cjs#L756029-L756029) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756029 uses an implicit arrow-function return.
| [evaluation:541917-541917](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541917-L541917) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:541917 uses an implicit arrow-function return.

### host:756029

Calls written directly in this body: `.toLowerCase`, `mcp.resolveServerHost`.

SHA-256 of the source span: `9a03c5c6707ccf79ad45ad317a1e20cecfc7137f0433dd596a3aab4b2cbb94af`.

### evaluation:541917

Calls written directly in this body: `.toLowerCase`, `mcp.resolveServerHost`.

SHA-256 of the source span: `9a03c5c6707ccf79ad45ad317a1e20cecfc7137f0433dd596a3aab4b2cbb94af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
