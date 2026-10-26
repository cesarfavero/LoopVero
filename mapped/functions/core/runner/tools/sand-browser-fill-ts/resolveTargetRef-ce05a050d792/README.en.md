# `resolveTargetRef`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727232-727261](../../../../../../../reference/runtime/host-main.cjs#L727232-L727261) | `FunctionDeclaration` | yes | `ctx, runner, target, preferredRole, fullSnapshot, belt, disambiguation` |
| [evaluation:561749-561778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561749-L561778) | `FunctionDeclaration` | yes | `ctx, runner, target, preferredRole, fullSnapshot, belt, disambiguation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727232-727261](../../../../../../../reference/runtime/host-main.cjs#L727232-L727261) | 7 | 0 | 2 | 7 | 0 | 0 |
| [evaluation:561749-561778](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561749-L561778) | 7 | 0 | 2 | 7 | 0 | 0 |

### host:727232

Calls written directly in this body: `belt.trustResult`, `classifyFailedLookup`, `classifyUnresolvedSelector`, `firstRefFromSnapshot`, `fullSnapshot`, `resolveLabelRefFromSnapshot`, `runner.run`.

SHA-256 of the source span: `b6a36eb6a60ba8ecc4cb3bf2ae0feae109daa2c74a339163bd28a7f4a9412e86`.

### evaluation:561749

Calls written directly in this body: `belt.trustResult`, `classifyFailedLookup`, `classifyUnresolvedSelector`, `firstRefFromSnapshot`, `fullSnapshot`, `resolveLabelRefFromSnapshot`, `runner.run`.

SHA-256 of the source span: `b6a36eb6a60ba8ecc4cb3bf2ae0feae109daa2c74a339163bd28a7f4a9412e86`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
