# `BrokeredGrants.clear`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550401-550406](../../../../../../../reference/runtime/host-main.cjs#L550401-L550406) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550401-550406](../../../../../../../reference/runtime/host-main.cjs#L550401-L550406) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:550401

Chamadas escritas diretamente neste corpo: `new Map`, `this.pending.clear`.

Alvos de atribuição ou incremento: `this.connectionId`, `this.held`, `this.hydrated`.

SHA-256 do trecho: `2bc3bb4512086bcea4d77692ea9acb91022279f2fd236ffd69a01f14128a95ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
