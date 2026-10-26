# `listOriginNamespaces`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/origin-repo-listing.ts` · [README do módulo](../../../../../modules/core/cloud-agents/origin-repo-listing-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512297-512326](../../../../../../reference/runtime/host-main.cjs#L512297-L512326) | `FunctionDeclaration` | sim | `origin` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512297-512326](../../../../../../reference/runtime/host-main.cjs#L512297-L512326) | 7 | 1 | 1 | 5 | 0 | 1 |

### host:512297

Chamadas escritas diretamente neste corpo: `BigInt`, `errorLogTag`, `namespaces.has`, `namespaces.set`, `namespaces.values`, `new GetAuthorizedNamespacesRequest`, `new Map`, `origin.getAuthorizedNamespaces`, `owned.namespace.trim`, `owned.ownerEntityId.toString`, `process.stderr.write`.

Alvos de atribuição ou incremento: `response`.

SHA-256 do trecho: `f3cceff59d81a8ed1799c520ff82ecc0b5a8ff77ba5d8caab6f3755c86707ca4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
