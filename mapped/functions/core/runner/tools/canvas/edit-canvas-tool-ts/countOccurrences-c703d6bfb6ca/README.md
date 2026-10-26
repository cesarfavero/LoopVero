# `countOccurrences`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775517-775526](../../../../../../../../reference/runtime/host-main.cjs#L775517-L775526) | `FunctionDeclaration` | não | `{ source, needle }` |
| [evaluation:575161-575170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575161-L575170) | `FunctionDeclaration` | não | `{ source, needle }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775517-775526](../../../../../../../../reference/runtime/host-main.cjs#L775517-L775526) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575161-575170](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575161-L575170) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775517

Chamadas escritas diretamente neste corpo: `source.indexOf`.

Alvos de atribuição ou incremento: `count2`, `from2`.

SHA-256 do trecho: `63356567ba58005bdda6f41d64f08cf487bdd63f47df0302b6514b776604fbee`.

### evaluation:575161

Chamadas escritas diretamente neste corpo: `source.indexOf`.

Alvos de atribuição ou incremento: `count2`, `from2`.

SHA-256 do trecho: `63356567ba58005bdda6f41d64f08cf487bdd63f47df0302b6514b776604fbee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
