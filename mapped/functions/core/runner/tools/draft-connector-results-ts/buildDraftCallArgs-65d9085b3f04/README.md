# `buildDraftCallArgs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:732618-732628](../../../../../../../reference/runtime/host-main.cjs#L732618-L732628) | `FunctionDeclaration` | não | `spec` |
| [evaluation:540140-540150](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540140-L540150) | `FunctionDeclaration` | não | `spec` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732618-732628](../../../../../../../reference/runtime/host-main.cjs#L732618-L732628) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540140-540150](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540140-L540150) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:732618

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `Object.fromEntries`, `new McpArgs`.

SHA-256 do trecho: `362169225ad4f2b9727457d33ee6ca8036ca57690c878043f0737ff0bc344c10`.

### evaluation:540140

Chamadas escritas diretamente neste corpo: `.map`, `Object.entries`, `Object.fromEntries`, `new McpArgs`.

SHA-256 do trecho: `a9430c56292089757625007800702e1685f657853248f58ed919f2c7d0531cdf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
