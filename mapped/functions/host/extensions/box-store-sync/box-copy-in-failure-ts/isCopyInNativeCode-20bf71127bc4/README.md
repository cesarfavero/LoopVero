# `isCopyInNativeCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-copy-in-failure.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-failure-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:473938-473953](../../../../../../../reference/runtime/host-main.cjs#L473938-L473953) | `FunctionDeclaration` | não | `code` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:473938-473953](../../../../../../../reference/runtime/host-main.cjs#L473938-L473953) | 10 | 0 | 0 | 4 | 0 | 0 |

### host:473938

Chamadas escritas diretamente neste corpo: `Object.hasOwn`.

SHA-256 do trecho: `793134d9d66fc9e6b3bbc36e887618158a67959ddbcf5c420c778cf24639d080`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
