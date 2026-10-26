# `LocalFsObjectStore.delete`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-object-store.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-object-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475362-475368](../../../../../../../reference/runtime/host-main.cjs#L475362-L475368) | `method` | sim | `key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475362-475368](../../../../../../../reference/runtime/host-main.cjs#L475362-L475368) | 1 | 0 | 1 | 0 | 1 | 1 |

### host:475362

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `this.pathFor`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `d476bff9ce9effcc8a165f55d2a48397f206df46db2448c0dff798b300c47649`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
