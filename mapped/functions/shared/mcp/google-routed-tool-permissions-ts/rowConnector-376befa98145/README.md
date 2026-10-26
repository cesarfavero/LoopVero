# `rowConnector`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/google-routed-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/google-routed-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687127-687137](../../../../../../reference/runtime/host-main.cjs#L687127-L687137) | `FunctionDeclaration` | não | `serverHost` |
| [evaluation:579262-579272](../../../../../../reference/runtime/sand-eval-runner.cjs#L579262-L579272) | `FunctionDeclaration` | não | `serverHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687127-687137](../../../../../../reference/runtime/host-main.cjs#L687127-L687137) | 2 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:579262-579272](../../../../../../reference/runtime/sand-eval-runner.cjs#L579262-L579272) | 2 | 1 | 0 | 3 | 0 | 0 |

### host:687127

Chamadas escritas diretamente neste corpo: `GOOGLE_ROUTED_TOOL_CARRIES.values`, `mcpServerHostname`, `mcpServerRestMcpProvider`.

SHA-256 do trecho: `f122ff1d64749b5fdd360f941576ec1b9e298e2f23ec96577f77bd33328913ea`.

### evaluation:579262

Chamadas escritas diretamente neste corpo: `GOOGLE_ROUTED_TOOL_CARRIES.values`, `mcpServerHostname`, `mcpServerRestMcpProvider`.

SHA-256 do trecho: `6d10377fc14bfac2d82cd638c4a11f55c95b01b237a410a96dfabae972f18008`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
