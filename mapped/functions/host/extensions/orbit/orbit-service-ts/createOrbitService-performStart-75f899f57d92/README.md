# `createOrbitService/performStart`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706329-706338](../../../../../../../reference/runtime/host-main.cjs#L706329-L706338) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706329-706338](../../../../../../../reference/runtime/host-main.cjs#L706329-L706338) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:706329

Chamadas escritas diretamente neste corpo: `deps.auth.subscribeToRenewal`, `deps.experiments.subscribe`, `deps.privacyMode.subscribe`, `deps.proxySupervisor.start`, `requestReconciliation`, `unsubscribes.push`.

SHA-256 do trecho: `e20bcf0af4425b2105679f836c6bbc5e3ea74f2595e6dcabcef6eed130ad45e2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
