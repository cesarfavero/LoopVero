# `exactLineOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-prompt-markers.ts` · [README do módulo](../../../../../modules/core/runner/sand-prompt-markers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:491222-491224](../../../../../../reference/runtime/host-main.cjs#L491222-L491224) | `FunctionDeclaration` | não | `lines2` |
| [evaluation:526140-526142](../../../../../../reference/runtime/sand-eval-runner.cjs#L526140-L526142) | `FunctionDeclaration` | não | `lines2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491222-491224](../../../../../../reference/runtime/host-main.cjs#L491222-L491224) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:526140-526142](../../../../../../reference/runtime/sand-eval-runner.cjs#L526140-L526142) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491222

Chamadas escritas diretamente neste corpo: `.join`, `lines2.map`, `new RegExp`.

SHA-256 do trecho: `04abd3d3e0e4413d31800d27fd92cc1a9b51b1a6258c4b81744b08883230c416`.

### evaluation:526140

Chamadas escritas diretamente neste corpo: `.join`, `lines2.map`, `new RegExp`.

SHA-256 do trecho: `dc2f4c2423bbb0d0646b72c7e36428dbf6301c3f8d231c597bc1d90b53884b80`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
