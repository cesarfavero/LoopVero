# `BrokeredGrants.persist`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550460-550501](../../../../../../../reference/runtime/host-main.cjs#L550460-L550501) | `method` | sim | `connectionId, changes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550460-550501](../../../../../../../reference/runtime/host-main.cjs#L550460-L550501) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:550460

Chamadas escritas diretamente neste corpo: `changes.flatMap`, `changes.map`, `this.writes.then`.

Alvos de atribuição ou incremento: `this.writes`.

SHA-256 do trecho: `0111ad1a16703aa0be9c5b188227475301c9d8925b6273b4386e559c128f4ea4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
