# `WebSocketCdpConnection.failPending`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543128-543135](../../../../../../../reference/runtime/host-main.cjs#L543128-L543135) | `method` | não | `stage` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543128-543135](../../../../../../../reference/runtime/host-main.cjs#L543128-L543135) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:543128

Chamadas escritas diretamente neste corpo: `new Error`, `pending.reject`, `this.pending.clear`, `this.pending.values`, `this.reportFailure`.

SHA-256 do trecho: `1fb83302f14a9fef92f208cd00c01c0a234f6169f8ba8ac7333bfcb3a236bbce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
