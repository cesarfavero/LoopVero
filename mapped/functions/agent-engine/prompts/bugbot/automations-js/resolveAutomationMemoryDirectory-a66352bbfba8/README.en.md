# `resolveAutomationMemoryDirectory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `agent-engine/prompts/bugbot/automations.js` · [Module README](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:631424-631431](../../../../../../../reference/runtime/host-main.cjs#L631424-L631431) | `FunctionDeclaration` | no | `stores` |
| [evaluation:410609-410616](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410609-L410616) | `FunctionDeclaration` | no | `stores` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631424-631431](../../../../../../../reference/runtime/host-main.cjs#L631424-L631431) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:410609-410616](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410609-L410616) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:631424

Calls written directly in this body: `.join`, `automationStore.path.trim`, `getMountedPathModule`, `stores.find`.

SHA-256 of the source span: `daf14b08a040e742fe7989a63deb8f37e5d2cb258b9f66f5ec6026fb88e9fe8a`.

### evaluation:410609

Calls written directly in this body: `.join`, `automationStore.path.trim`, `getMountedPathModule`, `stores.find`.

SHA-256 of the source span: `daf14b08a040e742fe7989a63deb8f37e5d2cb258b9f66f5ec6026fb88e9fe8a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
