# `storedFiringAutomation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-state-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-state-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762697-762708](../../../../../../../reference/runtime/host-main.cjs#L762697-L762708) | `FunctionDeclaration` | não | `deps` |
| [evaluation:555307-555318](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555307-L555318) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762697-762708](../../../../../../../reference/runtime/host-main.cjs#L762697-L762708) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:555307-555318](../../../../../../../reference/runtime/sand-eval-runner.cjs#L555307-L555318) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762697

Chamadas escritas diretamente neste corpo: `.find`, `deps.activeAutomationWakeId`, `deps.automationStore.list`.

SHA-256 do trecho: `1f8bb527b9e9ca86a51a9d8888d75c40a20bc503db003f93a72cbf358d38f351`.

### evaluation:555307

Chamadas escritas diretamente neste corpo: `.find`, `deps.activeAutomationWakeId`, `deps.automationStore.list`.

SHA-256 do trecho: `1f8bb527b9e9ca86a51a9d8888d75c40a20bc503db003f93a72cbf358d38f351`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
