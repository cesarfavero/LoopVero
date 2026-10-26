# `BrokeredGrants.dropExpired`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550446-550459](../../../../../../../reference/runtime/host-main.cjs#L550446-L550459) | `method` | sim | `nowMs2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550446-550459](../../../../../../../reference/runtime/host-main.cjs#L550446-L550459) | 2 | 1 | 1 | 3 | 0 | 0 |

### host:550446

Chamadas escritas diretamente neste corpo: `.filter`, `expired.map`, `this.held.delete`, `this.held.values`, `this.persist`.

SHA-256 do trecho: `016c6573b65f25b2203c7ebbe6d9b85371686bcbac80330d9303a295745dc603`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
