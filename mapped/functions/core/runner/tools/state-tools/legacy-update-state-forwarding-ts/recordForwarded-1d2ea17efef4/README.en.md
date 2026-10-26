# `recordForwarded`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/state-tools/legacy-update-state-forwarding.ts` · [Module README](../../../../../../../modules/core/runner/tools/state-tools/legacy-update-state-forwarding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:555717-555721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555717-L555721) | `FunctionDeclaration` | no | `ctx, target, forwardedTo` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:555717-555721](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L555717-L555721) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:555717

Calls written directly in this body: `legacyUpdateStateForwarded.applied`, `new ShimCall`, `shims.flush`, `shims.report`.

SHA-256 of the source span: `27fb349e08f8b45675153f8c90674583ecf1df25c097e64200333cae70720e32`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
