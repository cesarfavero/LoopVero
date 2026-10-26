# `FileAutomationStore.get`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720595-720599](../../../../../../reference/runtime/host-main.cjs#L720595-L720599) | `method` | não | `id` |
| [evaluation:627946-627950](../../../../../../reference/runtime/sand-eval-runner.cjs#L627946-L627950) | `method` | não | `id` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720595-720599](../../../../../../reference/runtime/host-main.cjs#L720595-L720599) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:627946-627950](../../../../../../reference/runtime/sand-eval-runner.cjs#L627946-L627950) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:720595

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `1867fc401ef9f125f8154ddc5315048ec48d49679bb5e10d8edbfca35a8e55dd`.

### evaluation:627946

Chamadas escritas diretamente neste corpo: `isSafeFolderId`, `this.readConfig`, `this.toRecord`.

SHA-256 do trecho: `1867fc401ef9f125f8154ddc5315048ec48d49679bb5e10d8edbfca35a8e55dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
