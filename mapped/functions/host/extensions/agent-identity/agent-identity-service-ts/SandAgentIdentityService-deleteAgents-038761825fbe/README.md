# `SandAgentIdentityService.deleteAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/agent-identity-service.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/agent-identity-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:495623-495653](../../../../../../../reference/runtime/host-main.cjs#L495623-L495653) | `method` | sim | `agentIds` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:495623-495653](../../../../../../../reference/runtime/host-main.cjs#L495623-L495653) | 1 | 4 | 2 | 1 | 0 | 0 |

### host:495623

Chamadas escritas diretamente neste corpo: `.verdicts.get`, `fresh.push`, `idsWith`, `invariant`, `joined.set`, `new Map`, `new Set`, `this.deletions.delete`, `this.deletions.get`, `this.deletions.set`, `this.runDeleteFlight`, `verdicts.set`.

Alvos de atribuição ou incremento: `own3`.

SHA-256 do trecho: `050350c78440ef882133399fbdeb581c9979d858e83bb9c83da672b42a17d1b6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
