# `HostLifecycleProgress.elapsedMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/host-lifecycle-progress.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/host-lifecycle-progress-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:731551-731553](../../../../../../../reference/runtime/host-main.cjs#L731551-L731553) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:731551-731553](../../../../../../../reference/runtime/host-main.cjs#L731551-L731553) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:731551

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.round`, `this.options.now`.

SHA-256 do trecho: `2f6df2efde7d1c15fd0a568bdda1bba20f474536e34c8066df522391cc577ede`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
