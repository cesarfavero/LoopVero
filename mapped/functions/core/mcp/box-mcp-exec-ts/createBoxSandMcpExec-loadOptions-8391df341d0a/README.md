# `createBoxSandMcpExec/loadOptions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/box-mcp-exec.ts` · [README do módulo](../../../../../modules/core/mcp/box-mcp-exec-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:684885-684887](../../../../../../reference/runtime/host-main.cjs#L684885-L684887) | `ArrowFunctionExpression` | não | `configJson` |
| [evaluation:514673-514675](../../../../../../reference/runtime/sand-eval-runner.cjs#L514673-L514675) | `ArrowFunctionExpression` | não | `configJson` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684885-684887](../../../../../../reference/runtime/host-main.cjs#L684885-L684887) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:684885 usa retorno implícito de arrow function.
| [evaluation:514673-514675](../../../../../../reference/runtime/sand-eval-runner.cjs#L514673-L514675) | 1 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em evaluation:514673 usa retorno implícito de arrow function.

### host:684885

Chamadas escritas diretamente neste corpo: `options2.removeMissing`.

SHA-256 do trecho: `37262e5f3a0bc4d386a4fd8814eaefceeb124dd67a6d185804a91234a046366f`.

### evaluation:514673

Chamadas escritas diretamente neste corpo: `options2.removeMissing`.

SHA-256 do trecho: `37262e5f3a0bc4d386a4fd8814eaefceeb124dd67a6d185804a91234a046366f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
