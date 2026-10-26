# `AutomationRuntime.emitAutomations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `host/extensions/transcript/automation-runtime.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/automation-runtime-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:734224-734229](../../../../../../../reference/runtime/host-main.cjs#L734224-L734229) | `method` | não | `session` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:734224-734229](../../../../../../../reference/runtime/host-main.cjs#L734224-L734229) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:734224

Chamadas escritas diretamente neste corpo: `.slice`, `session.automations.list`, `this.publishAutomations`, `this.tm.shouldEmitAutomations`.

SHA-256 do trecho: `f359fee2f8aafd6834539196eebf69c1e36fb147318bed499b78df25f3f36ac8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
