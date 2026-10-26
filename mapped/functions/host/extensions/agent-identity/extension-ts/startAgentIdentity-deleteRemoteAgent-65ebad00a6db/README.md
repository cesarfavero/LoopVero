# `startAgentIdentity/deleteRemoteAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496791-496803](../../../../../../../reference/runtime/host-main.cjs#L496791-L496803) | `ArrowFunctionExpression` | sim | `agentRef` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496791-496803](../../../../../../../reference/runtime/host-main.cjs#L496791-L496803) | 2 | 0 | 1 | 3 | 1 | 1 |

### host:496791

Chamadas escritas diretamente neste corpo: `agentDeleteDeadline.run`, `isConnectCode`, `isPermanentRpcError`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `39779a9a5869adaf3363db58752f529bd3511f796a2abe32a6b4ff37b6faa124`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
