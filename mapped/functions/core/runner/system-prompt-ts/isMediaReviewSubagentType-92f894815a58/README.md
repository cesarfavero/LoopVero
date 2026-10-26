# `isMediaReviewSubagentType`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/system-prompt.ts` · [README do módulo](../../../../../modules/core/runner/system-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:753734-753738](../../../../../../reference/runtime/host-main.cjs#L753734-L753738) | `FunctionDeclaration` | não | `subagentType` |
| [evaluation:532521-532525](../../../../../../reference/runtime/sand-eval-runner.cjs#L532521-L532525) | `FunctionDeclaration` | não | `subagentType` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:753734-753738](../../../../../../reference/runtime/host-main.cjs#L753734-L753738) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:532521-532525](../../../../../../reference/runtime/sand-eval-runner.cjs#L532521-L532525) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:753734

Chamadas escritas diretamente neste corpo: `normalizeSubagentTypeName`.

SHA-256 do trecho: `a2a19044406764067e9387345403fa3e49880f967f6b8d209f3dc309e7f9bd2e`.

### evaluation:532521

Chamadas escritas diretamente neste corpo: `normalizeSubagentTypeName`.

SHA-256 do trecho: `a2a19044406764067e9387345403fa3e49880f967f6b8d209f3dc309e7f9bd2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
