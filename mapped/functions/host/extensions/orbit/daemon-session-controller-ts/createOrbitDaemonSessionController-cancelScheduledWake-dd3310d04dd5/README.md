# `createOrbitDaemonSessionController/cancelScheduledWake`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706086-706090](../../../../../../../reference/runtime/host-main.cjs#L706086-L706090) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706086-706090](../../../../../../../reference/runtime/host-main.cjs#L706086-L706090) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706086

Chamadas escritas diretamente neste corpo: `wake.dispose`.

Alvos de atribuição ou incremento: `state.scheduledWake`.

SHA-256 do trecho: `6e08fab5f15367f144d91a09f5d8e9efa340c0c13dd42cd660e8a7abd7b3e898`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
