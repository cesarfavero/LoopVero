# `resolveRoleOrdinalRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-secure-fill-target.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-secure-fill-target-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724288-724305](../../../../../../../../reference/runtime/host-main.cjs#L724288-L724305) | `FunctionDeclaration` | yes | `ctx, runner, args` |
| [evaluation:560182-560199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560182-L560199) | `FunctionDeclaration` | yes | `ctx, runner, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724288-724305](../../../../../../../../reference/runtime/host-main.cjs#L724288-L724305) | 3 | 0 | 2 | 4 | 0 | 0 |
| [evaluation:560182-560199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L560182-L560199) | 3 | 0 | 2 | 4 | 0 | 0 |

### host:724288

Calls written directly in this body: `args.fullSnapshot`, `args.trust`, `refusalOfFailedLookup`, `resolved.error.includes`, `runner.run`.

SHA-256 of the source span: `6ec56b0fe4ff74bc09f8ffc0ecca3ac8d596aab62bb5dbf992d2245867d72a4b`.

### evaluation:560182

Calls written directly in this body: `args.fullSnapshot`, `args.trust`, `refusalOfFailedLookup`, `resolved.error.includes`, `runner.run`.

SHA-256 of the source span: `6ec56b0fe4ff74bc09f8ffc0ecca3ac8d596aab62bb5dbf992d2245867d72a4b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
