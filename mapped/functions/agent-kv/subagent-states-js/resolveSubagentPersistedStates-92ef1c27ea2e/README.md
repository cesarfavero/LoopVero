# `resolveSubagentPersistedStates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/subagents/README.md).

**Módulo:** `agent-kv/subagent-states.js` · [README do módulo](../../../../modules/agent-kv/subagent-states-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615972-616013](../../../../../reference/runtime/host-main.cjs#L615972-L616013) | `FunctionDeclaration` | sim | `ctx, state, blobStore` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615972-616013](../../../../../reference/runtime/host-main.cjs#L615972-L616013) | 5 | 1 | 1 | 2 | 1 | 0 |

### host:615972

Chamadas escritas diretamente neste corpo: `Object.entries`, `asyncMapValues`, `loads.find`, `recordMissingSubagentStateBlob`.

Alvos de atribuição ou incremento: `resolved[computed]`.

Alvos de lançamento explícito: `firstFailedLoad.error`.

SHA-256 do trecho: `373ec08c87d39295d49224402913483422896f787b742f6e1a976c0047e7e6d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
