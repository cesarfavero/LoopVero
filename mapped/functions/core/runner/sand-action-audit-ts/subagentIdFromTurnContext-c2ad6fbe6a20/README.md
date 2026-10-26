# `subagentIdFromTurnContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699130-699133](../../../../../../reference/runtime/host-main.cjs#L699130-L699133) | `FunctionDeclaration` | não | `ctx, agentId` |
| [evaluation:512665-512668](../../../../../../reference/runtime/sand-eval-runner.cjs#L512665-L512668) | `FunctionDeclaration` | não | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699130-699133](../../../../../../reference/runtime/host-main.cjs#L699130-L699133) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512665-512668](../../../../../../reference/runtime/sand-eval-runner.cjs#L512665-L512668) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:699130

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `955cfe3280dc397c942c788801bc3c13b5873a41a77ea37926b9f238dd3d1c6c`.

### evaluation:512665

Chamadas escritas diretamente neste corpo: `ctx.get`.

SHA-256 do trecho: `d6656f93474e645fc1762323ff849ed41a791801825ccde13d7a1a36de12639b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
