# `SandRunScheduler.pump`

[English](README.en.md) · [Português (Brasil)](README.md)

**Primary source:** [host-main.cjs:739756–739836](../../../reference/runtime/host-main.cjs#L739756-L739836).

**Component:** [scheduling](../../components/scheduling/README.en.md). **Evidence:** compiled implementation inspected statically; the original was not executed.

## Responsibility

Select and start an agent's next item when its logical slot is free.

## Preconditions

Returns without effects if the scheduler is disposed, the queue does not exist, or there is an `active` item. Priority is `user`, then `agent`, then `background`. The user lane uses `takeNextUserTask`.

## State installed before execution

Increments `generationCounter`, creates a `settled` Promise, stores the start time and `running` phase, and assigns the record to `queue.active`. Only then does it call `next.task()`. Even a function that throws synchronously therefore has a registered active item and finalization handling.

## Finalization

The task result enters `onTaskSettled`. This function resolves/rejects the item's public Promise. If the generation has already changed, it records `late_settle` and returns. If it is still the active generation, it clears the slot, disarms the watchdog, and calls `pump` again.

The `settled` Promise marks the task's actual completion. It is distinct from the Promise returned to the caller, which watchdog escape can resolve earlier.

## Concurrency

On the normal path, there is one active item per agent. Different agents have independent queues. After `escapeWedgedRun`, a zombie can continue while the next item starts; absolute physical serialization must not be claimed in that case.

## Observability

When dequeuing, it records total wait, time since acceptance when provided, background work overtaken, and queue depths. These are queue measurements, not estimates of how long the model will take.
