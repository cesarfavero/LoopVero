# `sectionedTeammateRosterLines`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/prompt-sections/agent-directory-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/prompt-sections/agent-directory-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536971-536996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536971-L536996) | `FunctionDeclaration` | não | `unfilteredOthers, groupsListedWithMembers, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536971-536996](../../../../../../../reference/runtime/sand-eval-runner.cjs#L536971-L536996) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:536971

Chamadas escritas diretamente neste corpo: `.slice`, `.sort`, `Math.max`, `group.footer`, `groupsListedWithMembers.map`, `lines2.push`, `new Map`, `new Set`, `shown.map`, `shownByGroup.get`, `shownByGroup.set`, `sortedOthers.filter`, `unfilteredOthers.filter`.

Alvos de atribuição ou incremento: `listed`.

SHA-256 do trecho: `6b0854be7d1fa34bed7ad384de42e49d6f0ce34b8990bc6a13c2411f5c453b7a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
