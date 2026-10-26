# `buildSuccessResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724999-725006](../../../../../../../reference/runtime/host-main.cjs#L724999-L725006) | `FunctionDeclaration` | no | `text3` |
| [evaluation:479970-479977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479970-L479977) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724999-725006](../../../../../../../reference/runtime/host-main.cjs#L724999-L725006) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479970-479977](../../../../../../../reference/runtime/sand-eval-runner.cjs#L479970-L479977) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:724999

Calls written directly in this body: `new CommunicateUpdateResult`, `new CommunicateUpdateSuccess`.

SHA-256 of the source span: `26426f64461d6210b107dde3de20df11ef56fd2b561fec4bf524ab035076ce23`.

### evaluation:479970

Calls written directly in this body: `new CommunicateUpdateResult`, `new CommunicateUpdateSuccess`.

SHA-256 of the source span: `26426f64461d6210b107dde3de20df11ef56fd2b561fec4bf524ab035076ce23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
