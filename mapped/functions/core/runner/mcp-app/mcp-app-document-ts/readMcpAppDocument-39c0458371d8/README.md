# `readMcpAppDocument`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/runner/mcp-app/mcp-app-document.ts` · [README do módulo](../../../../../../modules/core/runner/mcp-app/mcp-app-document-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701357-701389](../../../../../../../reference/runtime/host-main.cjs#L701357-L701389) | `FunctionDeclaration` | sim | `mcp, args` |
| [evaluation:585329-585361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585329-L585361) | `FunctionDeclaration` | sim | `mcp, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701357-701389](../../../../../../../reference/runtime/host-main.cjs#L701357-L701389) | 11 | 0 | 1 | 7 | 0 | 0 |
| [evaluation:585329-585361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L585329-L585361) | 11 | 0 | 1 | 7 | 0 | 0 |

### host:701357

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.byteLength`, `Buffer.from`, `args.resourceUri.startsWith`, `isMcpAppMimeType`, `mcp.readResource`, `mcpAppDocumentOverCap`, `parseMcpAppResourceMeta`.

SHA-256 do trecho: `2bc8002fb0837341a29caccbecb3cd6c762365b15a9729765bddbfb788c41bc7`.

### evaluation:585329

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.byteLength`, `Buffer.from`, `args.resourceUri.startsWith`, `isMcpAppMimeType`, `mcp.readResource`, `mcpAppDocumentOverCap`, `parseMcpAppResourceMeta`.

SHA-256 do trecho: `2bc8002fb0837341a29caccbecb3cd6c762365b15a9729765bddbfb788c41bc7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
