# `occurrenceLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/canvas/edit-canvas-tool.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/canvas/edit-canvas-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:775545-775555](../../../../../../../../reference/runtime/host-main.cjs#L775545-L775555) | `FunctionDeclaration` | não | `{ source, needle }` |
| [evaluation:575189-575199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575189-L575199) | `FunctionDeclaration` | não | `{ source, needle }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:775545-775555](../../../../../../../../reference/runtime/host-main.cjs#L775545-L775555) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:575189-575199](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L575189-L575199) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:775545

Chamadas escritas diretamente neste corpo: `lineOf`, `lines2.push`, `source.indexOf`.

Alvos de atribuição ou incremento: `from2`.

SHA-256 do trecho: `2ca7e2a7d5c5c50cbd3cc99acdd413fd7bde87fd39c69522601cb914651e3193`.

### evaluation:575189

Chamadas escritas diretamente neste corpo: `lineOf`, `lines2.push`, `source.indexOf`.

Alvos de atribuição ou incremento: `from2`.

SHA-256 do trecho: `2ca7e2a7d5c5c50cbd3cc99acdd413fd7bde87fd39c69522601cb914651e3193`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
