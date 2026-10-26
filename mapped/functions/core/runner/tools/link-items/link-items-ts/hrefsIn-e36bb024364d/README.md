# `hrefsIn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741125-741132](../../../../../../../../reference/runtime/host-main.cjs#L741125-L741132) | `FunctionDeclaration` | não | `text3` |
| [evaluation:482072-482079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482072-L482079) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741125-741132](../../../../../../../../reference/runtime/host-main.cjs#L741125-L741132) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482072-482079](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482072-L482079) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:741125

Chamadas escritas diretamente neste corpo: `hrefOf`, `hrefs.add`, `new Set`, `text3.matchAll`, `trimUrlToken`.

SHA-256 do trecho: `8c3bc773ba8316a8bdb3030ebb300d55611abebcd1c3aefcec9a4cd75842fd85`.

### evaluation:482072

Chamadas escritas diretamente neste corpo: `hrefOf`, `hrefs.add`, `new Set`, `text3.matchAll`, `trimUrlToken`.

SHA-256 do trecho: `8c3bc773ba8316a8bdb3030ebb300d55611abebcd1c3aefcec9a4cd75842fd85`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
