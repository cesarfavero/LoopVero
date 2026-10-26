# `compact`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/approvals/README.md).

**Módulo:** `core/runner/sand-auto-review-summaries.ts` · [README do módulo](../../../../../modules/core/runner/sand-auto-review-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693729-693732](../../../../../../reference/runtime/host-main.cjs#L693729-L693732) | `FunctionDeclaration` | não | `value, maxChars` |
| [evaluation:490965-490968](../../../../../../reference/runtime/sand-eval-runner.cjs#L490965-L490968) | `FunctionDeclaration` | não | `value, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693729-693732](../../../../../../reference/runtime/host-main.cjs#L693729-L693732) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490965-490968](../../../../../../reference/runtime/sand-eval-runner.cjs#L490965-L490968) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:693729

Chamadas escritas diretamente neste corpo: `.trim`, `normalized.slice`, `value.replace`.

SHA-256 do trecho: `e022860d802d56c26c226d0b2187f4edd78eb731696942d69bbc0f7ae3b19c09`.

### evaluation:490965

Chamadas escritas diretamente neste corpo: `.trim`, `normalized.slice`, `value.replace`.

SHA-256 do trecho: `e022860d802d56c26c226d0b2187f4edd78eb731696942d69bbc0f7ae3b19c09`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
