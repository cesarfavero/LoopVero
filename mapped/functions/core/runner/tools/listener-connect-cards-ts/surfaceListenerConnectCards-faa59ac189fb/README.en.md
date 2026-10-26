# `surfaceListenerConnectCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/listener-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/listener-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770916-770947](../../../../../../../reference/runtime/host-main.cjs#L770916-L770947) | `FunctionDeclaration` | yes | `{   trigger: trigger2,   isListenerPlatformConnected,   emit }` |
| [evaluation:570022-570053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570022-L570053) | `FunctionDeclaration` | yes | `{   trigger,   isListenerPlatformConnected,   emit }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770916-770947](../../../../../../../reference/runtime/host-main.cjs#L770916-L770947) | 5 | 2 | 1 | 4 | 0 | 1 |
| [evaluation:570022-570053](../../../../../../../reference/runtime/sand-eval-runner.cjs#L570022-L570053) | 5 | 2 | 1 | 4 | 0 | 1 |

### host:770916

Calls written directly in this body: `.join`, `disconnected.map`, `disconnected.push`, `emit`, `errorLogTag`, `isListenerPlatformConnected`, `listenerPlatformsInTrigger`, `process.stderr.write`.

SHA-256 of the source span: `4276e86add13b803201ca7ee96b17e88bd72b0bcd23d5edb0014241f8eeec768`.

### evaluation:570022

Calls written directly in this body: `.join`, `disconnected.map`, `disconnected.push`, `emit`, `errorLogTag`, `isListenerPlatformConnected`, `listenerPlatformsInTrigger`, `process.stderr.write`.

SHA-256 of the source span: `06ee3ad99c9bb97996f8f5bef4afdc8574a24938ea162811269472834aa9d4ad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
