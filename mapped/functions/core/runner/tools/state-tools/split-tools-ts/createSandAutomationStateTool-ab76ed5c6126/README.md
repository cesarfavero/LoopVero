# `createSandAutomationStateTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/split-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/split-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:771930-771956](../../../../../../../../reference/runtime/host-main.cjs#L771930-L771956) | `FunctionDeclaration` | não | `deps, options2` |
| [evaluation:571163-571189](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571163-L571189) | `FunctionDeclaration` | não | `deps, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:771930-771956](../../../../../../../../reference/runtime/host-main.cjs#L771930-L771956) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571163-571189](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L571163-L571189) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:771930

Chamadas escritas diretamente neste corpo: `Object.assign`, `advertisedAutomationParameters`, `automationToolDescription`, `defineCommunicateTool`.

SHA-256 do trecho: `8d81918b230b2b4d8ec94b03b97bdd5aca77928726ee394b07d9cd17e480cf50`.

### evaluation:571163

Chamadas escritas diretamente neste corpo: `Object.assign`, `advertisedAutomationParameters`, `automationToolDescription`, `defineCommunicateTool`.

SHA-256 do trecho: `8d81918b230b2b4d8ec94b03b97bdd5aca77928726ee394b07d9cd17e480cf50`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
