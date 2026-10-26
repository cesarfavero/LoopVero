# `BrokeredGrants.replace`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550375-550397](../../../../../../../reference/runtime/host-main.cjs#L550375-L550397) | `method` | não | `connectionId, delivered` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550375-550397](../../../../../../../reference/runtime/host-main.cjs#L550375-L550397) | 5 | 2 | 0 | 0 | 0 | 0 |

### host:550375

Chamadas escritas diretamente neste corpo: `delivered.slice`, `grantSchema.safeParse`, `held.delete`, `held.set`, `new Map`, `this.log`, `this.pending.clear`, `this.pending.delete`.

Alvos de atribuição ou incremento: `this.connectionId`, `this.held`, `this.hydrated`.

SHA-256 do trecho: `819598c503defae8933cea153073f477834fac3b443ec6b516840fa882c4dd4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
