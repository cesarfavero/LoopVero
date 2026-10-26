# `deriveSandRequestLineage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/request-lineage.ts` · [README do módulo](../../../../../modules/core/runner/request-lineage-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:534807-534821](../../../../../../reference/runtime/sand-eval-runner.cjs#L534807-L534821) | `FunctionDeclaration` | não | `ctx, toolCallId, fallback2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:534807-534821](../../../../../../reference/runtime/sand-eval-runner.cjs#L534807-L534821) | 4 | 0 | 0 | 3 | 0 | 0 |

### evaluation:534807

Chamadas escritas diretamente neste corpo: `ctx.get`, `getRootParentRequestId`.

SHA-256 do trecho: `382ca6e66f614dd5778c053a7a98110627af3ea13db863d8c59afd9c2221d463`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
