# `describeAlreadyGranted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-request.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725531-725533](../../../../../../../reference/runtime/host-main.cjs#L725531-L725533) | `FunctionDeclaration` | no | `entries` |
| [evaluation:524634-524636](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524634-L524636) | `FunctionDeclaration` | no | `entries` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725531-725533](../../../../../../../reference/runtime/host-main.cjs#L725531-L725533) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:524634-524636](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524634-L524636) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725531

Calls written directly in this body: `describeEntries`.

SHA-256 of the source span: `d36eff7419dbd3da780726ca3efe6c92e3193c082b527127c998190dc9f3d723`.

### evaluation:524634

Calls written directly in this body: `describeEntries`.

SHA-256 of the source span: `d36eff7419dbd3da780726ca3efe6c92e3193c082b527127c998190dc9f3d723`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
