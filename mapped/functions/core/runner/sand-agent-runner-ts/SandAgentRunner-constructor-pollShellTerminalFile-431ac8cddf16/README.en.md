# `_SandAgentRunner.constructor/pollShellTerminalFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593129-593129](../../../../../../reference/runtime/sand-eval-runner.cjs#L593129-L593129) | `ArrowFunctionExpression` | no | `shellId, isCancelled, settle2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593129-593129](../../../../../../reference/runtime/sand-eval-runner.cjs#L593129-L593129) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593129 uses an implicit arrow-function return.

### evaluation:593129

Calls written directly in this body: `pollShellTerminalFile`, `this.shellWatchHost`.

SHA-256 of the source span: `582876fa9df41142e4d2c65e3e96e82bf33ebc354e0ed07f7abe9e5519f69dae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
