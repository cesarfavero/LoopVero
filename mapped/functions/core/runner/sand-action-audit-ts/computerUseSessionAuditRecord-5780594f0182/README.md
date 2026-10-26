# `computerUseSessionAuditRecord`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:512941-512965](../../../../../../reference/runtime/sand-eval-runner.cjs#L512941-L512965) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:512941-512965](../../../../../../reference/runtime/sand-eval-runner.cjs#L512941-L512965) | 0 | 1 | 0 | 1 | 0 | 0 |

### evaluation:512941

Chamadas escritas diretamente neste corpo: `Date.now`, `Math.max`.

Alvos de atribuição ou incremento: `actionCount`, `actionCounts[computed]`.

SHA-256 do trecho: `d23c01784c1caa67a4fbd66670f97a433cbf8225da97ac6528477ac5322f882c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
