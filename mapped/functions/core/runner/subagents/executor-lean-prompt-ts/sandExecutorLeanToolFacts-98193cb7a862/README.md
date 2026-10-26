# `sandExecutorLeanToolFacts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552498-552511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552498-L552511) | `FunctionDeclaration` | não | `policy, mounted` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552498-552511](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552498-L552511) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:552498

Chamadas escritas diretamente neste corpo: `policy.offers`.

SHA-256 do trecho: `ac49230f312ecd0296b2fe5898acd5c0e5b22410677b193ef8d92a92efed70c9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
