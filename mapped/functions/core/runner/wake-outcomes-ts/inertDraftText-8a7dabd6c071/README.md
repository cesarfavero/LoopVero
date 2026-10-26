# `inertDraftText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/wake-outcomes.ts` · [README do módulo](../../../../../modules/core/runner/wake-outcomes-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:725671-725673](../../../../../../reference/runtime/host-main.cjs#L725671-L725673) | `FunctionDeclaration` | não | `value` |
| [evaluation:538728-538730](../../../../../../reference/runtime/sand-eval-runner.cjs#L538728-L538730) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725671-725673](../../../../../../reference/runtime/host-main.cjs#L725671-L725673) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:538728-538730](../../../../../../reference/runtime/sand-eval-runner.cjs#L538728-L538730) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725671

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `value.replace`.

SHA-256 do trecho: `5f780befb0b373b10ee0a9ab601b438b893aab83cb4f4929f0031014a564aa23`.

### evaluation:538728

Chamadas escritas diretamente neste corpo: `.replace`, `.trim`, `value.replace`.

SHA-256 do trecho: `5f780befb0b373b10ee0a9ab601b438b893aab83cb4f4929f0031014a564aa23`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
