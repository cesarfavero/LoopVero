# `BrokeredGrants.remove`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550442-550445](../../../../../../../reference/runtime/host-main.cjs#L550442-L550445) | `method` | sim | `connectionId, entryId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550442-550445](../../../../../../../reference/runtime/host-main.cjs#L550442-L550445) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:550442

Chamadas escritas diretamente neste corpo: `this.held.delete`, `this.persist`.

SHA-256 do trecho: `5bb18adc1e8a5a17d735b92d92dfdb54d26e3bffecd874374667ff2f1f174535`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
