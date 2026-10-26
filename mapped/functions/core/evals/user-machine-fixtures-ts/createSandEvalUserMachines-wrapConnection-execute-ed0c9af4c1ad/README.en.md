# `createSandEvalUserMachines/wrapConnection/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/user-machine-fixtures.ts` · [Module README](../../../../../modules/core/evals/user-machine-fixtures-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596524-596524](../../../../../../reference/runtime/sand-eval-runner.cjs#L596524-L596524) | `ArrowFunctionExpression` | no | `ctx, args, options2` |
| [evaluation:596527-596527](../../../../../../reference/runtime/sand-eval-runner.cjs#L596527-L596527) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:596530-596530](../../../../../../reference/runtime/sand-eval-runner.cjs#L596530-L596530) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596524-596524](../../../../../../reference/runtime/sand-eval-runner.cjs#L596524-L596524) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:596524 uses an implicit arrow-function return.
| [evaluation:596527-596527](../../../../../../reference/runtime/sand-eval-runner.cjs#L596527-L596527) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:596527 uses an implicit arrow-function return.
| [evaluation:596530-596530](../../../../../../reference/runtime/sand-eval-runner.cjs#L596530-L596530) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:596530 uses an implicit arrow-function return.

### evaluation:596524

Calls written directly in this body: `.execute`, `.shellStream`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 of the source span: `1020fe64e155d6cf46efe57ddcef1cb8f37563aeb2478a23253893481f67242f`.

### evaluation:596527

Calls written directly in this body: `.execute`, `.spawnBackground`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 of the source span: `ae66c6e038fae3afbfb00af4879c91a6d6846b91c06f68c280fa494d0a10247b`.

### evaluation:596530

Calls written directly in this body: `.execute`, `.read`, `base.get`, `evalBoxOptions`, `machineFor`.

SHA-256 of the source span: `c205641bc6e4dc678d1bccd60572699a221307e76d70e4259ae9190036e7f219`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
