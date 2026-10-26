# `serverEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684858-684867](../../../../../../reference/runtime/host-main.cjs#L684858-L684867) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |
| [evaluation:514646-514655](../../../../../../reference/runtime/sand-eval-runner.cjs#L514646-L514655) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684858-684867](../../../../../../reference/runtime/host-main.cjs#L684858-L684867) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514646-514655](../../../../../../reference/runtime/sand-eval-runner.cjs#L514646-L514655) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:684858

Chamadas escritas diretamente neste corpo: `.find`, `JSON.parse`, `Object.entries`.

SHA-256 do trecho: `364686a2a9b9ab06e34f76070822664adde8dfd48b0e9ee68e68591eff2875c5`.

### evaluation:514646

Chamadas escritas diretamente neste corpo: `.find`, `JSON.parse`, `Object.entries`.

SHA-256 do trecho: `470878ad8b31f0070515654b37966fda85cf0fa48537d6a43553312ebcabd4e7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
