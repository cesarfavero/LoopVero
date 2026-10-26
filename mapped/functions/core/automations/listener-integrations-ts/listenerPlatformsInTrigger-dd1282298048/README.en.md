# `listenerPlatformsInTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/listener-integrations.ts` · [Module README](../../../../../modules/core/automations/listener-integrations-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505161-505167](../../../../../../reference/runtime/host-main.cjs#L505161-L505167) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:570010-570016](../../../../../../reference/runtime/sand-eval-runner.cjs#L570010-L570016) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505161-505167](../../../../../../reference/runtime/host-main.cjs#L505161-L505167) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:570010-570016](../../../../../../reference/runtime/sand-eval-runner.cjs#L570010-L570016) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:505161

Calls written directly in this body: `isListenerPlatform`, `new Set`, `platforms.add`, `triggerListeners`.

SHA-256 of the source span: `4af6c59f3279c1930b892c0d2a6d15d1b6f7da05c092e74b14ad1403798239f8`.

### evaluation:570010

Calls written directly in this body: `isListenerPlatform`, `new Set`, `platforms.add`, `triggerListeners`.

SHA-256 of the source span: `4e370064878cabc2bace3ad7fc2152c3b343e56e20967ba449d684d15854472a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
