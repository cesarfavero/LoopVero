# `SandComputerAutoReviewBlockedError.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-computer-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-computer-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699278-699284](../../../../../../reference/runtime/host-main.cjs#L699278-L699284) | `method` | não | `message, telemetryCode = "policy_denied"` |
| [evaluation:513034-513040](../../../../../../reference/runtime/sand-eval-runner.cjs#L513034-L513040) | `method` | não | `message, telemetryCode = "policy_denied"` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699278-699284](../../../../../../reference/runtime/host-main.cjs#L699278-L699284) | 1 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:513034-513040](../../../../../../reference/runtime/sand-eval-runner.cjs#L513034-L513040) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:699278

Chamadas escritas diretamente neste corpo: `reviewFailureAuditOutcome`, `super`.

Alvos de atribuição ou incremento: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 do trecho: `9319a8b312d19c1b85cdc7f48b327ab22207756ed87e06f79ccba8dca3950a1a`.

### evaluation:513034

Chamadas escritas diretamente neste corpo: `reviewFailureAuditOutcome`, `super`.

Alvos de atribuição ou incremento: `this.name`, `this.telemetryCode`, `this.toolCallAuditOutcome`, `this.toolCallTransientKind`.

SHA-256 do trecho: `9319a8b312d19c1b85cdc7f48b327ab22207756ed87e06f79ccba8dca3950a1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
