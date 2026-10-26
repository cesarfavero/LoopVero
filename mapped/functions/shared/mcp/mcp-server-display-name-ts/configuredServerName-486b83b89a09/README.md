# `configuredServerName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-server-display-name.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-server-display-name-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:577222-577235](../../../../../../reference/runtime/sand-eval-runner.cjs#L577222-L577235) | `FunctionDeclaration` | não | `serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:577222-577235](../../../../../../reference/runtime/sand-eval-runner.cjs#L577222-L577235) | 4 | 0 | 0 | 4 | 0 | 0 |

### evaluation:577222

Chamadas escritas diretamente neste corpo: `MCP_SERVER_IDENTIFIER_SCOPE2.exec`, `connectCardManifest`, `rowIdentifier.slice`, `stripAccountSuffix`, `stripGrokMintedSuffix`.

SHA-256 do trecho: `96c733a834367f682d8f960c8800967bfba45893503ffea2ab5f7c45bcdeeaf1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
