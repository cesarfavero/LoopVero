# `FileAutomationStore.recordRun`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `host/automations/automation-store.ts` · [README do módulo](../../../../../modules/host/automations/automation-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:720658-720660](../../../../../../reference/runtime/host-main.cjs#L720658-L720660) | `method` | não | `id, at3 = Date.now()` |
| [evaluation:628009-628011](../../../../../../reference/runtime/sand-eval-runner.cjs#L628009-L628011) | `method` | não | `id, at3 = Date.now()` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:720658-720660](../../../../../../reference/runtime/host-main.cjs#L720658-L720660) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:628009-628011](../../../../../../reference/runtime/sand-eval-runner.cjs#L628009-L628011) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:720658

Chamadas escritas diretamente neste corpo: `this.recordRunWith`.

SHA-256 do trecho: `40bad036a7c63627692711d92bb010a98083d62e095ac4df6138f4446903f8ed`.

### evaluation:628009

Chamadas escritas diretamente neste corpo: `this.recordRunWith`.

SHA-256 do trecho: `40bad036a7c63627692711d92bb010a98083d62e095ac4df6138f4446903f8ed`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
