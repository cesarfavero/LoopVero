# `isLocalAiToolActivitySource`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/ports/connected-activity.ts` · [README do módulo](../../../../../modules/core/ports/connected-activity-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509077-509079](../../../../../../reference/runtime/host-main.cjs#L509077-L509079) | `FunctionDeclaration` | não | `source` |
| [evaluation:556722-556724](../../../../../../reference/runtime/sand-eval-runner.cjs#L556722-L556724) | `FunctionDeclaration` | não | `source` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509077-509079](../../../../../../reference/runtime/host-main.cjs#L509077-L509079) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556722-556724](../../../../../../reference/runtime/sand-eval-runner.cjs#L556722-L556724) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509077

Chamadas escritas diretamente neste corpo: `SAND_AI_TOOL_SOURCES.some`.

SHA-256 do trecho: `4754ec0bb061cb4e70111e50167c7a8047fbd53e1a4ef6e43004e4dbfb210dfa`.

### evaluation:556722

Chamadas escritas diretamente neste corpo: `SAND_AI_TOOL_SOURCES.some`.

SHA-256 do trecho: `4754ec0bb061cb4e70111e50167c7a8047fbd53e1a4ef6e43004e4dbfb210dfa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
