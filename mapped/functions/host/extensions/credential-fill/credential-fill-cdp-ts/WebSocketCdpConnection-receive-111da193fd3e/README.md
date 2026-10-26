# `WebSocketCdpConnection.receive`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-fill/credential-fill-cdp.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-fill/credential-fill-cdp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:543105-543127](../../../../../../../reference/runtime/host-main.cjs#L543105-L543127) | `method` | não | `data2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:543105-543127](../../../../../../../reference/runtime/host-main.cjs#L543105-L543127) | 4 | 0 | 0 | 5 | 0 | 1 |

### host:543105

Chamadas escritas diretamente neste corpo: `JSON.parse`, `cdpResponseSchema.safeParse`, `errorLogTag`, `new Error`, `pending.reject`, `pending.resolve`, `this.pending.delete`, `this.pending.get`, `this.reportFailure`.

Alvos de atribuição ou incremento: `decoded`.

SHA-256 do trecho: `641a62123696addb3dd3f3621bb90b634992bae751fd0d1ff7900659cc2de11a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
