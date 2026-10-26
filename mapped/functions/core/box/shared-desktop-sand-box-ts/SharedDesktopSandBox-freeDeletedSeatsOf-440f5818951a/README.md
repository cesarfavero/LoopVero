# `SharedDesktopSandBox.freeDeletedSeatsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554529-554554](../../../../../../reference/runtime/host-main.cjs#L554529-L554554) | `method` | sim | `ctx, candidates, table` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554529-554554](../../../../../../reference/runtime/host-main.cjs#L554529-L554554) | 5 | 3 | 2 | 1 | 0 | 0 |

### host:554529

Chamadas escritas diretamente neste corpo: `asyncMapValues`, `candidates.map`, `deleted.has`, `freed.map`, `seats.filter`, `seats.push`, `table.assignments.get`, `table.tokens.get`, `this.agentWindowTokens.get`, `this.agentWindows.get`, `this.deletedAgents.add`, `this.dropCachedSeat`, `this.findDeletedAgents`, `this.queueSeatChanges`.

SHA-256 do trecho: `c1bbd06b1c9d58495daaa1de2bb5821f4316d448fad4e0ad1eba27e0b8778509`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
