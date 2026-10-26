# `trimUrlToken2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583431-583441](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583431-L583441) | `FunctionDeclaration` | não | `token` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583431-583441](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583431-L583441) | 2 | 1 | 0 | 1 | 0 | 0 |

### evaluation:583431

Chamadas escritas diretamente neste corpo: `URL_TRAILING_PUNCTUATION2.includes`, `token.charAt`, `token.slice`, `token.split`.

Alvos de atribuição ou incremento: `end`, `unmatchedClose`.

SHA-256 do trecho: `fe07a5867bc539394ca926111b2da7b6a9b5978f01a025cbd7f32adece7c0d12`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
