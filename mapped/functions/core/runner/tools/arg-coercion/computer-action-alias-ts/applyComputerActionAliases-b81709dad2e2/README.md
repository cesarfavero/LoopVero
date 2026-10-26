# `applyComputerActionAliases`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/arg-coercion/computer-action-alias.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/arg-coercion/computer-action-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:776820-776851](../../../../../../../../reference/runtime/host-main.cjs#L776820-L776851) | `FunctionDeclaration` | não | `value, enabled` |
| [evaluation:576465-576496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576465-L576496) | `FunctionDeclaration` | não | `value, enabled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776820-776851](../../../../../../../../reference/runtime/host-main.cjs#L776820-L776851) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:576465-576496](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L576465-L576496) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:776820

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.some`, `Array.isArray`, `COMPUTER_ACTION_ALIAS_SHIM.applied`, `COMPUTER_ACTION_ALIAS_SHIM.refused`, `actionPath`, `enabled`, `followUpOutcomes.map`, `isUnknownRecord2`, `new Set`, `outcomes.every`, `outcomes.findIndex`, `outcomes.flatMap`, `outcomes.slice`, `reportShim`.

SHA-256 do trecho: `245348d4ea10f0565caf4e3c39b53a8212d6599f4cc25f4e66e4e7ca3e8f618e`.

### evaluation:576465

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.some`, `Array.isArray`, `COMPUTER_ACTION_ALIAS_SHIM.applied`, `COMPUTER_ACTION_ALIAS_SHIM.refused`, `actionPath`, `enabled`, `followUpOutcomes.map`, `isUnknownRecord2`, `new Set`, `outcomes.every`, `outcomes.findIndex`, `outcomes.flatMap`, `outcomes.slice`, `reportShim`.

SHA-256 do trecho: `245348d4ea10f0565caf4e3c39b53a8212d6599f4cc25f4e66e4e7ca3e8f618e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
