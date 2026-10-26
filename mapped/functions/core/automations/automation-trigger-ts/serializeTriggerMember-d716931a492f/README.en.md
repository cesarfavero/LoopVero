# `serializeTriggerMember`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716373-716435](../../../../../../reference/runtime/host-main.cjs#L716373-L716435) | `FunctionDeclaration` | no | `member` |
| [evaluation:528056-528118](../../../../../../reference/runtime/sand-eval-runner.cjs#L528056-L528118) | `FunctionDeclaration` | no | `member` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716373-716435](../../../../../../reference/runtime/host-main.cjs#L716373-L716435) | 17 | 0 | 0 | 10 | 0 | 0 |
| [evaluation:528056-528118](../../../../../../reference/runtime/sand-eval-runner.cjs#L528056-L528118) | 17 | 0 | 0 | 10 | 0 | 0 |

### host:716373

Calls written directly in this body: `cronTrigger`.

SHA-256 of the source span: `1b3fc2b06301685db4bdc2cb48ea0dd8439d18d6167e038d54e6122b22d614be`.

### evaluation:528056

Calls written directly in this body: `cronTrigger`.

SHA-256 of the source span: `1b3fc2b06301685db4bdc2cb48ea0dd8439d18d6167e038d54e6122b22d614be`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
