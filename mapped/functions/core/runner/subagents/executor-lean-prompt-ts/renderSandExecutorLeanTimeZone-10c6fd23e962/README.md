# `renderSandExecutorLeanTimeZone`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-lean-prompt.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-lean-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:552570-552576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552570-L552576) | `FunctionDeclaration` | não | `timeZone, now = /* @__PURE__ */ new Date()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:552570-552576](../../../../../../../reference/runtime/sand-eval-runner.cjs#L552570-L552576) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:552570

Chamadas escritas diretamente neste corpo: `.join`, `formatSandTimeZoneWithOffset`.

SHA-256 do trecho: `cf402604fd6933f4ff41ec832a184699949bb26bbc890ce6305593aefa3d2848`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
