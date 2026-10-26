# `refuseUnreviewableAutomationRemoval`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762839-762847](../../../../../../../reference/runtime/host-main.cjs#L762839-L762847) | `FunctionDeclaration` | não | `deps, automationId` |
| [evaluation:555449-555457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555449-L555457) | `FunctionDeclaration` | não | `deps, automationId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762839-762847](../../../../../../../reference/runtime/host-main.cjs#L762839-L762847) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555449-555457](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555449-L555457) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762839

Chamadas escritas diretamente neste corpo: `.find`, `deps.automationStore.list`, `deps.canReviewAutomationWrites`.

SHA-256 do trecho: `cd068c1271d2e3e18dff6e9d0ca32db17f07b5505bc6d315c52413b7b2ac7643`.

### evaluation:555449

Chamadas escritas diretamente neste corpo: `.find`, `deps.automationStore.list`, `deps.canReviewAutomationWrites`.

SHA-256 do trecho: `cd068c1271d2e3e18dff6e9d0ca32db17f07b5505bc6d315c52413b7b2ac7643`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
