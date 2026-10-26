# `LocalFsObjectStore.putFromFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-object-store.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475352-475356](../../../../../../../reference/runtime/host-main.cjs#L475352-L475356) | `method` | sim | `key, srcPath, _sha, _size2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475352-475356](../../../../../../../reference/runtime/host-main.cjs#L475352-L475356) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:475352

Chamadas escritas diretamente neste corpo: `this.pathFor`.

SHA-256 do trecho: `f9342790bceb66b79c063187d8e7be6bdd2493044ff91b398bbefdfbfb6575da`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
