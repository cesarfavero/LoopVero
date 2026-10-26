# `configWithoutServer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684846-684857](../../../../../../reference/runtime/host-main.cjs#L684846-L684857) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |
| [evaluation:514634-514645](../../../../../../reference/runtime/sand-eval-runner.cjs#L514634-L514645) | `FunctionDeclaration` | não | `configJson, serverIdentifier` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684846-684857](../../../../../../reference/runtime/host-main.cjs#L684846-L684857) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:514634-514645](../../../../../../reference/runtime/sand-eval-runner.cjs#L514634-L514645) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:684846

Chamadas escritas diretamente neste corpo: `.filter`, `JSON.parse`, `JSON.stringify`, `Object.entries`, `Object.fromEntries`.

SHA-256 do trecho: `ee2556ad3eb70d70575028fadb17dac17d29e38a524334c48c648b4f7573ca4c`.

### evaluation:514634

Chamadas escritas diretamente neste corpo: `.filter`, `JSON.parse`, `JSON.stringify`, `Object.entries`, `Object.fromEntries`.

SHA-256 do trecho: `b833455216b18910ee04659a7de36c03cd7d5948610047ecc1042d2541cdc5e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
