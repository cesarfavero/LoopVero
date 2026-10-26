# `queryTerms2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/plugin-search/plugin-search.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/plugin-search/plugin-search-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:779480-779486](../../../../../../../../reference/runtime/host-main.cjs#L779480-L779486) | `FunctionDeclaration` | não | `query2` |
| [evaluation:579718-579724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579718-L579724) | `FunctionDeclaration` | não | `query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779480-779486](../../../../../../../../reference/runtime/host-main.cjs#L779480-L779486) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579718-579724](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L579718-L579724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779480

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 do trecho: `fe75148ad79aee7a0997cafe2156b04dfbfd9422a51ecf6830ca6633f2f84118`.

### evaluation:579718

Chamadas escritas diretamente neste corpo: `.filter`, `.split`, `new Set`, `query2.toLowerCase`.

SHA-256 do trecho: `fe75148ad79aee7a0997cafe2156b04dfbfd9422a51ecf6830ca6633f2f84118`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
