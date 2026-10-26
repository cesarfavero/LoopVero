# `wordsOfLabelAfterCollapsingEmailAddressAndPhoneNumber`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/sand-browser-fill.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:726989-727004](../../../../../../../reference/runtime/host-main.cjs#L726989-L727004) | `FunctionDeclaration` | não | `text3` |
| [evaluation:561600-561615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561600-L561615) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726989-727004](../../../../../../../reference/runtime/host-main.cjs#L726989-L727004) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:561600-561615](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561600-L561615) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:726989

Chamadas escritas diretamente neste corpo: `collapsed.push`, `wordsOf2`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `db495096c24eee326c09d4343352b659060adbb323c1e01af928a1b7b3692731`.

### evaluation:561600

Chamadas escritas diretamente neste corpo: `collapsed.push`, `wordsOf3`.

Alvos de atribuição ou incremento: `i`.

SHA-256 do trecho: `e5807abd64bd3cfa15d8a31b0a09d2d5bdc2cb07dccb9197ac602b5124fd7af9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
