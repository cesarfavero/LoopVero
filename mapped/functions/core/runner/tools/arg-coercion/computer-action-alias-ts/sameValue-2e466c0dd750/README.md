# `sameValue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776784-776786](../../../../../../../../reference/runtime/host-main.cjs#L776784-L776786) | `FunctionDeclaration` | não | `sent, implied` |
| [evaluation:576429-576431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576429-L576431) | `FunctionDeclaration` | não | `sent, implied` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776784-776786](../../../../../../../../reference/runtime/host-main.cjs#L776784-L776786) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576429-576431](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576429-L576431) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776784

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `String`.

SHA-256 do trecho: `f57d8d4e57640e0e73aad264fd7039d15660cd5d05067718ac878a7dbb7891c1`.

### evaluation:576429

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `String`.

SHA-256 do trecho: `f57d8d4e57640e0e73aad264fd7039d15660cd5d05067718ac878a7dbb7891c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
