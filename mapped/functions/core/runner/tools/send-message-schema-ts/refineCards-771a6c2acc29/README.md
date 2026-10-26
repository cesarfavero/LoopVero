# `refineCards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/send-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/send-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741565-741593](../../../../../../../reference/runtime/host-main.cjs#L741565-L741593) | `FunctionDeclaration` | não | `value, ctx` |
| [evaluation:482512-482540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482512-L482540) | `FunctionDeclaration` | não | `value, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741565-741593](../../../../../../../reference/runtime/host-main.cjs#L741565-L741593) | 3 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:482512-482540](../../../../../../../reference/runtime/sand-eval-runner.cjs#L482512-L482540) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:741565

Chamadas escritas diretamente neste corpo: `canonicalRenderCardId`, `cards.entries`, `ctx.addIssue`, `isFieldProvided`, `new Set`, `seen.add`, `seen.has`.

SHA-256 do trecho: `ef51c64889583d8b0343644092c82bad6d71e9a7b9329c3f0d30325c383f499a`.

### evaluation:482512

Chamadas escritas diretamente neste corpo: `canonicalRenderCardId`, `cards.entries`, `ctx.addIssue`, `isFieldProvided`, `new Set`, `seen.add`, `seen.has`.

SHA-256 do trecho: `53b43c4196c1ca5e4de961f9d0505001fb629e366789e1a8ae1d8ec60dcc1e86`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
