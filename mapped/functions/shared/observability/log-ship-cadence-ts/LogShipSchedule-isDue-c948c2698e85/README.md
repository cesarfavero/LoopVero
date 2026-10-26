# `LogShipSchedule.isDue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/log-ship-cadence.ts` · [README do módulo](../../../../../modules/shared/observability/log-ship-cadence-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452671-452674](../../../../../../reference/runtime/host-main.cjs#L452671-L452674) | `method` | não | `eager, nowMs2 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452671-452674](../../../../../../reference/runtime/host-main.cjs#L452671-L452674) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:452671

Chamadas escritas diretamente neste corpo: `this.isBackingOff`.

SHA-256 do trecho: `d722dda69dd0be8271e576c1ada176d78a2ed654e7407d7e889cdb31e1440b5c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
