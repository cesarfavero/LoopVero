# `LogShipSchedule.record`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/log-ship-cadence.ts` · [README do módulo](../../../../../modules/shared/observability/log-ship-cadence-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452678-452697](../../../../../../reference/runtime/host-main.cjs#L452678-L452697) | `method` | não | `result, nowMs2 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452678-452697](../../../../../../reference/runtime/host-main.cjs#L452678-L452697) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:452678

Chamadas escritas diretamente neste corpo: `getConnectRetryAfterMs`, `isRateLimitConnectError`, `nextLogShipDelayMs`.

Alvos de atribuição ou incremento: `this.failureStreak`, `this.nextShipAtMs`, `this.rateLimitStreak`.

SHA-256 do trecho: `1301aa5e0315bc6d4338d9633d68a0119c8bdd1df3d2ca0ca6e813b5f5d655ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
