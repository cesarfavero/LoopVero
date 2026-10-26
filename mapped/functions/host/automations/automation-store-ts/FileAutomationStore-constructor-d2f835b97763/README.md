# `FileAutomationStore.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720488-720499](../../../../../../reference/runtime/host-main.cjs#L720488-L720499) | `method` | não | `automationsDir, resolveUserTimeZone = () => void 0, clock = realClock` |
| [evaluation:627839-627850](../../../../../../reference/runtime/sand-eval-runner.cjs#L627839-L627850) | `method` | não | `automationsDir, resolveUserTimeZone = () => void 0, clock = realClock` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720488-720499](../../../../../../reference/runtime/host-main.cjs#L720488-L720499) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:627839-627850](../../../../../../reference/runtime/sand-eval-runner.cjs#L627839-L627850) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:720488

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`, `new WatchedDirectory`.

Alvos de atribuição ou incremento: `this.automationsDir`, `this.dir`, `this.resolveUserTimeZone`.

SHA-256 do trecho: `1fececb7c69368ee7df4df9512fa664b4c0f0e9871dbfabc552bbfb1f7a8339a`.

### evaluation:627839

Chamadas escritas diretamente neste corpo: `createDebouncePolicy`, `new WatchedDirectory`.

Alvos de atribuição ou incremento: `this.automationsDir`, `this.dir`, `this.resolveUserTimeZone`.

SHA-256 do trecho: `1fececb7c69368ee7df4df9512fa664b4c0f0e9871dbfabc552bbfb1f7a8339a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
