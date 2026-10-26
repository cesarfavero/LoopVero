# `playwrightBoxMcpWindowIndex`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/mcp/playwright-mcp-servers.ts` · [README do módulo](../../../../../modules/core/mcp/playwright-mcp-servers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:700758-700761](../../../../../../reference/runtime/host-main.cjs#L700758-L700761) | `FunctionDeclaration` | não | `serverName` |
| [evaluation:514906-514909](../../../../../../reference/runtime/sand-eval-runner.cjs#L514906-L514909) | `FunctionDeclaration` | não | `serverName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700758-700761](../../../../../../reference/runtime/host-main.cjs#L700758-L700761) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514906-514909](../../../../../../reference/runtime/sand-eval-runner.cjs#L514906-L514909) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:700758

Chamadas escritas diretamente neste corpo: `Number`, `PLAYWRIGHT_BOX_MCP_SERVER_NAME.exec`.

SHA-256 do trecho: `087d5ac92a6350a491d25fe3613bd0aa663af35687ca4ebb494cca6bd63049e7`.

### evaluation:514906

Chamadas escritas diretamente neste corpo: `Number`, `PLAYWRIGHT_BOX_MCP_SERVER_NAME.exec`.

SHA-256 do trecho: `087d5ac92a6350a491d25fe3613bd0aa663af35687ca4ebb494cca6bd63049e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
