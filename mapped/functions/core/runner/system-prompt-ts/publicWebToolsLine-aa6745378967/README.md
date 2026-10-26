# `publicWebToolsLine`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:532797-532806](../../../../../../reference/runtime/sand-eval-runner.cjs#L532797-L532806) | `FunctionDeclaration` | não | `hostSurfaces, webSearchOffByTeamNetwork` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:532797-532806](../../../../../../reference/runtime/sand-eval-runner.cjs#L532797-L532806) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:532797

Chamadas escritas diretamente neste corpo: `names3.join`, `offeredWebToolNames`.

SHA-256 do trecho: `ae99736d164c071231374b8627ee0edf8ad5f971a1a6bc303aa5058747cc6c11`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
