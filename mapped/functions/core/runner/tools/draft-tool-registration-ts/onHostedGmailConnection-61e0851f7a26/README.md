# `onHostedGmailConnection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756063-756065](../../../../../../../reference/runtime/host-main.cjs#L756063-L756065) | `FunctionDeclaration` | não | `mcp, route` |
| [evaluation:541951-541953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541951-L541953) | `FunctionDeclaration` | não | `mcp, route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756063-756065](../../../../../../../reference/runtime/host-main.cjs#L756063-L756065) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541951-541953](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541951-L541953) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:756063

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `emailConnectorOf`, `isHostedGmailRoute`, `mcp.resolveServerHost`.

SHA-256 do trecho: `e7e4b42b07b5179964d250855e9b5639e686ffd9022bb4560ff20613b3c8deec`.

### evaluation:541951

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `emailConnectorOf`, `isHostedGmailRoute`, `mcp.resolveServerHost`.

SHA-256 do trecho: `e7e4b42b07b5179964d250855e9b5639e686ffd9022bb4560ff20613b3c8deec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
