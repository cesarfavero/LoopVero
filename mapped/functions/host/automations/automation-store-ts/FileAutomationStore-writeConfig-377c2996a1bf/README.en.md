# `FileAutomationStore.writeConfig`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `host/automations/automation-store.ts` · [Module README](../../../../../modules/host/automations/automation-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:720564-720566](../../../../../../reference/runtime/host-main.cjs#L720564-L720566) | `method` | no | `id, config2` |
| [evaluation:627915-627917](../../../../../../reference/runtime/sand-eval-runner.cjs#L627915-L627917) | `method` | no | `id, config2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720564-720566](../../../../../../reference/runtime/host-main.cjs#L720564-L720566) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627915-627917](../../../../../../reference/runtime/sand-eval-runner.cjs#L627915-L627917) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720564

Calls written directly in this body: `serializeConfig`, `this.configPath`, `this.dir.writeFileAtomic`.

SHA-256 of the source span: `4264b1c110179c57be5509b887881c56b1ded59fbb342d65a8fc8528c7be41ae`.

### evaluation:627915

Calls written directly in this body: `serializeConfig`, `this.configPath`, `this.dir.writeFileAtomic`.

SHA-256 of the source span: `4264b1c110179c57be5509b887881c56b1ded59fbb342d65a8fc8528c7be41ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
