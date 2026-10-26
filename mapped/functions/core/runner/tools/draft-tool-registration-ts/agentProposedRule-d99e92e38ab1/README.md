# `agentProposedRule`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756290-756299](../../../../../../../reference/runtime/host-main.cjs#L756290-L756299) | `FunctionDeclaration` | não | `proposed, saved, allowed` |
| [evaluation:542211-542220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542211-L542220) | `FunctionDeclaration` | não | `proposed, saved, allowed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756290-756299](../../../../../../../reference/runtime/host-main.cjs#L756290-L756299) | 6 | 0 | 0 | 6 | 0 | 0 |
| [evaluation:542211-542220](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542211-L542220) | 6 | 0 | 0 | 6 | 0 | 0 |

### host:756290

Chamadas escritas diretamente neste corpo: `allowed`, `isInsertionOnlyRuleEdit`, `offerable`, `saved.includes`.

SHA-256 do trecho: `0802597177c7a245a10dab2d33e06e970818c28e957060d18980e15fab5b50a5`.

### evaluation:542211

Chamadas escritas diretamente neste corpo: `allowed`, `isInsertionOnlyRuleEdit`, `offerable`, `saved.includes`.

SHA-256 do trecho: `0802597177c7a245a10dab2d33e06e970818c28e957060d18980e15fab5b50a5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
