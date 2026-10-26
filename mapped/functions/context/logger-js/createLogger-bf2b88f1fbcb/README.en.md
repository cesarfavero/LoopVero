# `createLogger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225712-225732](../../../../../reference/runtime/host-main.cjs#L225712-L225732) | `FunctionDeclaration` | no | `name18` |
| [evaluation:2200-2220](../../../../../reference/runtime/sand-eval-runner.cjs#L2200-L2220) | `FunctionDeclaration` | no | `name18` |
| [state-worker:21594-21614](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21594-L21614) | `FunctionDeclaration` | no | `name` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225712-225732](../../../../../reference/runtime/host-main.cjs#L225712-L225732) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:2200-2220](../../../../../reference/runtime/sand-eval-runner.cjs#L2200-L2220) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21594-21614](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21594-L21614) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225712

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `6c5732da6efa722fe5669d7c202e6904f5b8a545ff7bb09d7694e64dceaf3ee7`.

### evaluation:2200

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `b03c8cc23396f02eba66621171d25018d0f4d04399e700cc3d373d366360adb9`.

### state-worker:21594

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `259d92b10fab3810fa976b73da15ea18bc19a3ba308ad18ec2a61436a2ea8102`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
