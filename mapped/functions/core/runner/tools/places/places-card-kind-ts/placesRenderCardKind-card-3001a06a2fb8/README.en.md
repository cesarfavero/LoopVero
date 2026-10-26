# `placesRenderCardKind/card`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/places/places-card-kind.ts` · [Module README](../../../../../../../modules/core/runner/tools/places/places-card-kind-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768824-768824](../../../../../../../../reference/runtime/host-main.cjs#L768824-L768824) | `ArrowFunctionExpression` | no | `places` |
| [evaluation:564399-564399](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564399-L564399) | `ArrowFunctionExpression` | no | `places` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768824-768824](../../../../../../../../reference/runtime/host-main.cjs#L768824-L768824) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768824 uses an implicit arrow-function return.
| [evaluation:564399-564399](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564399-L564399) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564399 uses an implicit arrow-function return.

### host:768824

Calls written directly in this body: `places.map`, `placesCardOf`.

SHA-256 of the source span: `e41bc002d247773bdc9068053a614367dbcf24adcafe8c15a087b177da90d321`.

### evaluation:564399

Calls written directly in this body: `places.map`, `placesCardOf`.

SHA-256 of the source span: `e41bc002d247773bdc9068053a614367dbcf24adcafe8c15a087b177da90d321`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
