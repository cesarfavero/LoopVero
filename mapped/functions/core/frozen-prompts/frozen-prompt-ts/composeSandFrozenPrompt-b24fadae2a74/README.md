# `composeSandFrozenPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/frozen-prompts/frozen-prompt.ts` · [README do módulo](../../../../../modules/core/frozen-prompts/frozen-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:537450-537477](../../../../../../reference/runtime/sand-eval-runner.cjs#L537450-L537477) | `FunctionDeclaration` | não | `frozenPrompt, rendered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:537450-537477](../../../../../../reference/runtime/sand-eval-runner.cjs#L537450-L537477) | 4 | 2 | 0 | 1 | 0 | 0 |

### evaluation:537450

Chamadas escritas diretamente neste corpo: `.forEach`, `emitLive`, `frozenPrompt.promptSections.map`, `harnessPlaced.has`, `inFrozenPrompt.has`, `new Map`, `new Set`, `out.push`, `placedAfter.get`, `placedAfter.set`, `rendered.get`, `rendered.keys`.

Alvos de atribuição ou incremento: `anchor2`.

SHA-256 do trecho: `dc83cb7685a832fef841b8036e98dab88aedfe1de3c81fcde5ece31a74fb081f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
