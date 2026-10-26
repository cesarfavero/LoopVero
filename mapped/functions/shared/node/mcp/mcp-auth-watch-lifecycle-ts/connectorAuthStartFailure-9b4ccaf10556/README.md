# `connectorAuthStartFailure`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-auth-watch-lifecycle.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-auth-watch-lifecycle-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685635-685641](../../../../../../../reference/runtime/host-main.cjs#L685635-L685641) | `FunctionDeclaration` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685635-685641](../../../../../../../reference/runtime/host-main.cjs#L685635-L685641) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:685635

Chamadas escritas diretamente neste corpo: `SandError.connectorAuthStartFailed`, `isDeadlineExceededConnectError`, `startFailureReason`.

SHA-256 do trecho: `4c86996d6d417c4c014941b1dde54e534a8211ffb6ff3aa530d9e7e8e65efd9c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
