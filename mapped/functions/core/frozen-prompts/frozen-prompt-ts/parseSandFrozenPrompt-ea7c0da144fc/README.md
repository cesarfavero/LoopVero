# `parseSandFrozenPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537397-537449](../../../../../../reference/runtime/sand-eval-runner.cjs#L537397-L537449) | `FunctionDeclaration` | não | `frozenPromptId, frozenPromptFiles, isGateOn = () => false, host = CAPTURED_HOST` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537397-537449](../../../../../../reference/runtime/sand-eval-runner.cjs#L537397-L537449) | 8 | 2 | 0 | 1 | 4 | 0 |

### evaluation:537397

Chamadas escritas diretamente neste corpo: `.map`, `JSON.parse`, `entry.split`, `groups.push`, `harnessPlacedLiveSections.push`, `isSandSystemPromptSectionName`, `new Error`, `new Map`, `new Set`, `order.split`, `policySchema.parse`, `sectionTexts.get`, `sectionTexts.has`, `sectionTexts.set`, `selectGateVariant`, `selectHostVariant`, `shardText`, `splitFrozenPromptFiles`, `toolInputSchema.safeParse`, `tools.push`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `c0d10f4dc2a781e520b49a40099950eeacab1466d5be460ec0b49672dbfa4d20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
