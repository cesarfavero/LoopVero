# `materializeAutomationMemoryInstruction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `agent-engine/prompts/bugbot/automations.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:631445-631452](../../../../../../../reference/runtime/host-main.cjs#L631445-L631452) | `FunctionDeclaration` | não | `automationInstructions, stores` |
| [evaluation:410630-410637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410630-L410637) | `FunctionDeclaration` | não | `automationInstructions, stores` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631445-631452](../../../../../../../reference/runtime/host-main.cjs#L631445-L631452) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:410630-410637](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410630-L410637) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:631445

Chamadas escritas diretamente neste corpo: `.join`, `automationInstructions.includes`, `automationInstructions.split`, `buildAutomationMemoryInstruction`, `resolveAutomationMemoryDirectory`.

SHA-256 do trecho: `51141d647f3c5f0965c0cb899cb64890b1da6f2612cc7f069fb497a02cdf6402`.

### evaluation:410630

Chamadas escritas diretamente neste corpo: `.join`, `automationInstructions.includes`, `automationInstructions.split`, `buildAutomationMemoryInstruction`, `resolveAutomationMemoryDirectory`.

SHA-256 do trecho: `51141d647f3c5f0965c0cb899cb64890b1da6f2612cc7f069fb497a02cdf6402`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
