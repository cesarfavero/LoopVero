# `boxResourceReadToShared`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685012-685040](../../../../../../reference/runtime/host-main.cjs#L685012-L685040) | `FunctionDeclaration` | não | `result, uri` |
| [evaluation:514800-514828](../../../../../../reference/runtime/sand-eval-runner.cjs#L514800-L514828) | `FunctionDeclaration` | não | `result, uri` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685012-685040](../../../../../../reference/runtime/host-main.cjs#L685012-L685040) | 11 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:514800-514828](../../../../../../reference/runtime/sand-eval-runner.cjs#L514800-L514828) | 11 | 0 | 0 | 6 | 0 | 0 |

### host:685012

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `mcpAppDocumentOverCap`.

SHA-256 do trecho: `44fca73d5cc07c6daae8bee09f1db2e3eff3253b2fe93f2c7fa45ce6073e7e82`.

### evaluation:514800

Chamadas escritas diretamente neste corpo: `.toString`, `Buffer.from`, `mcpAppDocumentOverCap`.

SHA-256 do trecho: `44fca73d5cc07c6daae8bee09f1db2e3eff3253b2fe93f2c7fa45ce6073e7e82`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
