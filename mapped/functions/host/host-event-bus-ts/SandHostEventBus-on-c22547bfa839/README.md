# `SandHostEventBus.on`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-event-bus.ts` · [README do módulo](../../../../modules/host/host-event-bus-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786271-786273](../../../../../reference/runtime/host-main.cjs#L786271-L786273) | `method` | não | `topic, handler` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786271-786273](../../../../../reference/runtime/host-main.cjs#L786271-L786273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:786271

Chamadas escritas diretamente neste corpo: `this.capabilityEvents.on`.

SHA-256 do trecho: `31e2bdc281acc35c5ba6f0d970cd7bf4abcc9918e8479bacc602b73b7f753ded`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
