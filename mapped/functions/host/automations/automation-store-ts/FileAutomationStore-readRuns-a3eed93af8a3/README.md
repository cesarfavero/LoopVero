# `FileAutomationStore.readRuns`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720528-720537](../../../../../../reference/runtime/host-main.cjs#L720528-L720537) | `method` | não | `id` |
| [evaluation:627879-627888](../../../../../../reference/runtime/sand-eval-runner.cjs#L627879-L627888) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720528-720537](../../../../../../reference/runtime/host-main.cjs#L720528-L720537) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:627879-627888](../../../../../../reference/runtime/sand-eval-runner.cjs#L627879-L627888) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:720528

Chamadas escritas diretamente neste corpo: `parseStoredAutomationRuns`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.runsPath`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `7ff884facc5c7fa14d4e90208b7f8ef780aa0c263b37b786aaa5aa156e969787`.

### evaluation:627879

Chamadas escritas diretamente neste corpo: `parseStoredAutomationRuns`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.runsPath`.

Alvos de atribuição ou incremento: `raw`.

SHA-256 do trecho: `17855c76d339b4094c64ab6ca3dab74e811aa6937db01ca8a3de24f3ba640387`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
