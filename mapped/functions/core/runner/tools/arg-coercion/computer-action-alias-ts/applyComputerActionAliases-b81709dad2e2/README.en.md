# `applyComputerActionAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776820-776851](../../../../../../../../reference/runtime/host-main.cjs#L776820-L776851) | `FunctionDeclaration` | no | `value, enabled` |
| [evaluation:576465-576496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576465-L576496) | `FunctionDeclaration` | no | `value, enabled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776820-776851](../../../../../../../../reference/runtime/host-main.cjs#L776820-L776851) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:576465-576496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576465-L576496) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:776820

Calls written directly in this body: `.join`, `.map`, `.some`, `Array.isArray`, `COMPUTER_ACTION_ALIAS_SHIM.applied`, `COMPUTER_ACTION_ALIAS_SHIM.refused`, `actionPath`, `enabled`, `followUpOutcomes.map`, `isUnknownRecord2`, `new Set`, `outcomes.every`, `outcomes.findIndex`, `outcomes.flatMap`, `outcomes.slice`, `reportShim`.

SHA-256 of the source span: `245348d4ea10f0565caf4e3c39b53a8212d6599f4cc25f4e66e4e7ca3e8f618e`.

### evaluation:576465

Calls written directly in this body: `.join`, `.map`, `.some`, `Array.isArray`, `COMPUTER_ACTION_ALIAS_SHIM.applied`, `COMPUTER_ACTION_ALIAS_SHIM.refused`, `actionPath`, `enabled`, `followUpOutcomes.map`, `isUnknownRecord2`, `new Set`, `outcomes.every`, `outcomes.findIndex`, `outcomes.flatMap`, `outcomes.slice`, `reportShim`.

SHA-256 of the source span: `245348d4ea10f0565caf4e3c39b53a8212d6599f4cc25f4e66e4e7ca3e8f618e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
