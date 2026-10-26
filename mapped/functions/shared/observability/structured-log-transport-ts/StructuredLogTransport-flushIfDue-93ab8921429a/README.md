# `StructuredLogTransport.flushIfDue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453147-453153](../../../../../../reference/runtime/host-main.cjs#L453147-L453153) | `method` | sim | `eager` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453147-453153](../../../../../../reference/runtime/host-main.cjs#L453147-L453153) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:453147

Chamadas escritas diretamente neste corpo: `this.flush`, `this.hasPendingDrops`, `this.queueEagerDrain`, `this.shipSchedule.isDue`.

SHA-256 do trecho: `a0724051680b8895d51d4cec532a05c3e18e1d2f07efbb8f90ba710dffac5b91`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
