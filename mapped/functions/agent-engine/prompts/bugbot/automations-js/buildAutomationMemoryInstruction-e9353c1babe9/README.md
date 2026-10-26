# `buildAutomationMemoryInstruction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `agent-engine/prompts/bugbot/automations.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:631432-631444](../../../../../../../reference/runtime/host-main.cjs#L631432-L631444) | `FunctionDeclaration` | não | `memoryDirectory` |
| [evaluation:410617-410629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410617-L410629) | `FunctionDeclaration` | não | `memoryDirectory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631432-631444](../../../../../../../reference/runtime/host-main.cjs#L631432-L631444) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:410617-410629](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410617-L410629) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:631432

Chamadas escritas diretamente neste corpo: `.join`, `getMountedPathModule`, `pathModule.join`.

SHA-256 do trecho: `9a171a8fb2fa64d65a75c6d8ce140190187f03219fcbe2c85f5e5c9bbc7d4fa0`.

### evaluation:410617

Chamadas escritas diretamente neste corpo: `.join`, `getMountedPathModule`, `pathModule.join`.

SHA-256 do trecho: `9a171a8fb2fa64d65a75c6d8ce140190187f03219fcbe2c85f5e5c9bbc7d4fa0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
