# `SandHost.getHealth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/sand-host.ts` · [README do módulo](../../../../modules/host/sand-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786639-786650](../../../../../reference/runtime/host-main.cjs#L786639-L786650) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786639-786650](../../../../../reference/runtime/host-main.cjs#L786639-L786650) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:786639

Chamadas escritas diretamente neste corpo: `.saturatedSinceMs`, `Date.now`, `this.hostExtensions.api`, `this.transcript.isPausingForUpgrade`.

Alvos de atribuição ou incremento: `this.lastBusyAtMs`.

SHA-256 do trecho: `e1ba1ff66e9e7a2302d700b81f1b265a66c68b6a8a71713af809d69173115509`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
