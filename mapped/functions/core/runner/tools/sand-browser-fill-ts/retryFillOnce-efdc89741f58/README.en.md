# `retryFillOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727895-727914](../../../../../../../reference/runtime/host-main.cjs#L727895-L727914) | `FunctionDeclaration` | yes | `ctx, runner, entry, target, op, belt, firstPassKind, disambiguation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727895-727914](../../../../../../../reference/runtime/host-main.cjs#L727895-L727914) | 6 | 0 | 3 | 5 | 0 | 0 |

### host:727895

Calls written directly in this body: `belt.okToWrite`, `belt.trustResult`, `op.args`, `resolveRefFromFreshSnapshot`, `runner.run`.

SHA-256 of the source span: `f78965c7f4af6040e29a4f639b9ca8fc0bab270f510cf12ef37e64580cba00bc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
