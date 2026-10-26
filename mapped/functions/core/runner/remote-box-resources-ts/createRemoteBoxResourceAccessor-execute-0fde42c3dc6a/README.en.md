# `createRemoteBoxResourceAccessor/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/remote-box-resources.ts` · [Module README](../../../../../modules/core/runner/remote-box-resources-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:534553-534595](../../../../../../reference/runtime/sand-eval-runner.cjs#L534553-L534595) | `ArrowFunctionExpression` | no | `ctx, args, options2` |
| [evaluation:534598-534619](../../../../../../reference/runtime/sand-eval-runner.cjs#L534598-L534619) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:534627-534630](../../../../../../reference/runtime/sand-eval-runner.cjs#L534627-L534630) | `ArrowFunctionExpression` | no | `ctx, args, options2` |
| [evaluation:534633-534636](../../../../../../reference/runtime/sand-eval-runner.cjs#L534633-L534636) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:534639-534666](../../../../../../reference/runtime/sand-eval-runner.cjs#L534639-L534666) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:534669-534673](../../../../../../reference/runtime/sand-eval-runner.cjs#L534669-L534673) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:534676-534688](../../../../../../reference/runtime/sand-eval-runner.cjs#L534676-L534688) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |
| [evaluation:534692-534736](../../../../../../reference/runtime/sand-eval-runner.cjs#L534692-L534736) | `ArrowFunctionExpression` | yes | `ctx, args, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534553-534595](../../../../../../reference/runtime/sand-eval-runner.cjs#L534553-L534595) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:534553 uses an implicit arrow-function return.
| [evaluation:534598-534619](../../../../../../reference/runtime/sand-eval-runner.cjs#L534598-L534619) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:534627-534630](../../../../../../reference/runtime/sand-eval-runner.cjs#L534627-L534630) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:534627 uses an implicit arrow-function return.
| [evaluation:534633-534636](../../../../../../reference/runtime/sand-eval-runner.cjs#L534633-L534636) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:534639-534666](../../../../../../reference/runtime/sand-eval-runner.cjs#L534639-L534666) | 7 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:534669-534673](../../../../../../reference/runtime/sand-eval-runner.cjs#L534669-L534673) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at evaluation:534669 uses an implicit arrow-function return.
| [evaluation:534676-534688](../../../../../../reference/runtime/sand-eval-runner.cjs#L534676-L534688) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:534692-534736](../../../../../../reference/runtime/sand-eval-runner.cjs#L534692-L534736) | 3 | 0 | 1 | 1 | 2 | 1 |

### evaluation:534553

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `16b40bc6c378fb2049279c7cefea996f733d3f1d0d5f3421fe26bdc1dfe86b43`.

### evaluation:534598

Calls written directly in this body: `onBoxRetryingOnceIfReplaced`, `probeNavigationAfterShell`.

SHA-256 of the source span: `ae063d01484693a7745e78eae61fad7d4f7d3c2ba2b48b4c353efe07d7bd60db`.

### evaluation:534627

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `6d5b32d15958bf65f5261c6077193d329d5dac6b10430a1a83a53c78109080f8`.

### evaluation:534633

Calls written directly in this body: `auditedBoxBackgroundShell.execute`, `guardAutoReviewBarrier`.

SHA-256 of the source span: `6e1ea11e540968ac4b227b12448b89d4f31aa7e6fa00e0702401ad05efb30738`.

### evaluation:534639

Calls written directly in this body: `host.onManagedSkillRead`, `host.onSkillServedRead`, `host.readManagedSkill`, `host.readUserSkill`, `managedSkillIdFromPath`, `readStoreAttachmentOrBox`, `turnAttributionFromContext`.

SHA-256 of the source span: `02f506d9919edf26b9d0119d5376a6022a7c9d32947c4d00d051c58fa16cbaa3`.

### evaluation:534669

Calls written directly in this body: `onBoxRetryingOnceIfReplaced`.

SHA-256 of the source span: `75e9244f13c777c8cd0a8614db045214ae4cb9dcddbf0abd8cf97d94f1c40ae9`.

### evaluation:534676

Calls written directly in this body: `guardAutoReviewBarrier`, `onBoxRetryingOnceIfReplaced`.

SHA-256 of the source span: `bb956031f443d27aa23db3a5c20cdc428fb3a22f3d9fb056c2ffddf587ec4eef`.

### evaluation:534692

Calls written directly in this body: `Date.now`, `boxNotReadyReasonForError`, `dropConnection`, `host.computerUse.sweepTabs`, `host.probeNavigationAfterComputerUse`, `mayChangeTabs`, `new SandBoxNotReadyError`, `onBoxRetryingOnceIfReplaced`.

Explicit throw targets: `SandBoxNotReadyError`, `error63`.

SHA-256 of the source span: `f4a00ece9edf09076dcd665ce669f9fca7c049109b58c822f00aff847f86a9ae`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
