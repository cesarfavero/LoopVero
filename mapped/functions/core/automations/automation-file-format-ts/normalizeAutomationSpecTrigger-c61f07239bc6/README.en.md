# `normalizeAutomationSpecTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-file-format.ts` · [Module README](../../../../../modules/core/automations/automation-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716625-716640](../../../../../../reference/runtime/host-main.cjs#L716625-L716640) | `FunctionDeclaration` | no | `trigger2, minimumIntervalMs` |
| [evaluation:627339-627354](../../../../../../reference/runtime/sand-eval-runner.cjs#L627339-L627354) | `FunctionDeclaration` | no | `trigger, minimumIntervalMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716625-716640](../../../../../../reference/runtime/host-main.cjs#L716625-L716640) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:627339-627354](../../../../../../reference/runtime/sand-eval-runner.cjs#L627339-L627354) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:716625

Calls written directly in this body: `cronTrigger`, `isTriggerParseFailure`, `isValidSchedule`, `members2.push`, `normalizeSchedule`, `parseStoredTrigger`, `serializeStoredTrigger`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `9ad7055372a4c39159ee8662e1cf284835b1534581385f83eef9172a90fa35ca`.

### evaluation:627339

Calls written directly in this body: `cronTrigger`, `isTriggerParseFailure`, `isValidSchedule`, `members2.push`, `normalizeSchedule`, `parseStoredTrigger`, `serializeStoredTrigger`, `triggerFromList`, `triggerList`.

SHA-256 of the source span: `f843c26c994b7674864607dfb19d33cf746b78ad1ea9fc2560e4b68a6613d04b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
