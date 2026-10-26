# `getDefaultMcpCustomInstruction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-custom-instructions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:687255-687257](../../../../../../reference/runtime/host-main.cjs#L687255-L687257) | `FunctionDeclaration` | não | `serverName` |
| [evaluation:529141-529143](../../../../../../reference/runtime/sand-eval-runner.cjs#L529141-L529143) | `FunctionDeclaration` | não | `serverName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:687255-687257](../../../../../../reference/runtime/host-main.cjs#L687255-L687257) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:529141-529143](../../../../../../reference/runtime/sand-eval-runner.cjs#L529141-L529143) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:687255

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `DEFAULT_MCP_CONNECTOR_INSTRUCTIONS.get`, `serverName.trim`.

SHA-256 do trecho: `93b939cda71bc324423094b466d3eaf65192932ef7358e6ac83c68461f99b640`.

### evaluation:529141

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `DEFAULT_MCP_CONNECTOR_INSTRUCTIONS.get`, `serverName.trim`.

SHA-256 do trecho: `93b939cda71bc324423094b466d3eaf65192932ef7358e6ac83c68461f99b640`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
