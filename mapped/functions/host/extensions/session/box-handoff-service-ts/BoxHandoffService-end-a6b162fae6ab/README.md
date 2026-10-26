# `BoxHandoffService.end`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/session/box-handoff-service.ts` · [README do módulo](../../../../../../modules/host/extensions/session/box-handoff-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:728326-728343](../../../../../../../reference/runtime/host-main.cjs#L728326-L728343) | `method` | sim | `agentId, trigger2, requestId2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728326-728343](../../../../../../../reference/runtime/host-main.cjs#L728326-L728343) | 3 | 0 | 1 | 3 | 0 | 0 |

### host:728326

Chamadas escritas diretamente neste corpo: `decideBoxHandBack`, `this.deps.onEnded`, `this.deps.onStatusChanged`, `this.pending.delete`, `this.pending.get`, `this.reportBoxHelpResolved`.

SHA-256 do trecho: `624254a2f87b3a7c8354642cf8ecdd00d2e66e445814ba635241e244da90c3c3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
