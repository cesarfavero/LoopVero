# `build/describeScmConnect`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/box-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/box-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778665-778680](../../../../../../../../reference/runtime/host-main.cjs#L778665-L778680) | `ArrowFunctionExpression` | yes | `{           repoUrl,           rejection,           knownIntent,           blockedAction,           readOriginPrIdentityHosts         }` |
| [evaluation:578399-578414](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578399-L578414) | `ArrowFunctionExpression` | yes | `{           repoUrl,           rejection,           knownIntent,           blockedAction,           readOriginPrIdentityHosts         }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778665-778680](../../../../../../../../reference/runtime/host-main.cjs#L778665-L778680) | 4 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:778665 uses an implicit arrow-function return.
| [evaluation:578399-578414](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L578399-L578414) | 4 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:578399 uses an implicit arrow-function return.

### host:778665

Calls written directly in this body: `describeScmConnectBlocker`, `detectScmProviderForRepoUrl`.

SHA-256 of the source span: `e11b0de84ab0e436bd27e78abc0fd025f020961663b4f1a86aff87d6034f2419`.

### evaluation:578399

Calls written directly in this body: `describeScmConnectBlocker`, `detectScmProviderForRepoUrl`.

SHA-256 of the source span: `e11b0de84ab0e436bd27e78abc0fd025f020961663b4f1a86aff87d6034f2419`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
